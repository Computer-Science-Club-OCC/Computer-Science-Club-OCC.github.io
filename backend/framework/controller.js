// ----------------------------------------------------------------------------------//
//                                Controller Framework                               //
// ----------------------------------------------------------------------------------//
// Descriptions:
//      - Controller Framework reduces the redundancy when implementing REST API
//          using Express JS
//      - This framework won't support user or user-related models at the moment
//      - The framework use query string parameters in api route for flexibility
//
//  Usage:
//      1. Import Controller class to controller file via the directory
//          controllers/<model_name>/<model_name>-controller.js
//      2. Create an instance of the class by assigning the data model
//      3. Export the controller instance
//      4. Import the controller instance to the route file via the directory
//          routes/<model_name>/<model_name>-route.js
//      5. Add a member function that is suitable for an API method
//          (GET, PUT, PATCH,.. etc) of the routing function
//      6. Import the model route to index.js under "Import route" section
//          and add use route

const config = require("../config")

class Controller {
    constructor(model) {
        this.Model = model
    }

    //
    // Get all instances in batch using cursor pagination
    // Handle GET request
    //
    // This function does not handle random page access
    // For efficiency, it queries data in batch
    // This allow frontend to render pagination from a served batch
    // Whenever frontend exceeds the limit page based on the batch size,
    // Frontend must handle a request to push a new batch
    //
    async getAll(req, res) {
        const reqSize = parseInt(req.query.size) // get query size from query params
        const sortOrder = { _id: -1 } // sort in descending order by default
        let size = config.defaultPageSize
        let next = req.query.next
        let prev = req.query.prev
        const query = {}

        // Count all instances
        const total = await this.Model.find().count("_id")

        if (reqSize > config.defaultMaxPageSize) {
            size = config.defaultMaxPageSize
        } else if (reqSize > size) {
            size = reqSize
        }

        if (req.query.last) {
            sortOrder._id = 1
            size = total % size === 0 ? size : total % size
        } else if (next) {
            query._id = { $lt: next }
        } else if (prev) {
            query._id = { $gt: prev }
            sortOrder._id = 1
        }

        const data = await this.Model.find(query)
            .sort(sortOrder)
            .limit(size)
            .then((data) => {
                if (prev || req.query.last) {
                    return data.reverse()
                }

                return data
            })
            .catch((error) => {
                return res.status(400).json({ error })
            })

        // Update next and prev cursors
        let firstId, lastId
        let hasNext = false
        let hasPrev = false

        if (data.length) {
            firstId = data[0]._id
            lastId = data[data.length - 1]._id
            hasPrev = await this.Model.exists({ _id: { $gt: firstId } })
            hasNext = await this.Model.exists({ _id: { $lt: lastId } })
        }

        next = hasNext ? lastId : null
        prev = hasPrev ? firstId : null

        return res.status(200).json({
            total,
            size,
            cursors: {
                prev,
                next,
            },
            data,
        })
    }

    //
    // Retrieve a data instance by id
    // Handle GET request that contains id param.
    //
    async getOne(req, res) {
        const instance = await this.Model.findById(req.query.id)

        if (!instance) {
            return res.status(204).json({ Error: "item does not exist" })
        }

        return res.status(200).json(instance)
    }

    //
    // Add a new data instance to the database.
    // Handle POST request.
    //
    async create(req, res) {
        if (!req.body) {
            return res
                .status(400)
                .json({ error: "Request body has no content" })
        }

        const existedData = await this.Model.findOne(req.body)

        if (existedData) {
            return res.status(403).json({ error: "Data already existed" })
        }

        const instance = this.Model(req.body)
        const newInstance = await instance.save().catch((error) => {
            return res.status(400).json({ error })
        })

        return res.status(201).json({
            message: "A new instance was added to database",
            data: newInstance,
        })
    }

    //
    // Partially or fully update values for a data instance by id.
    // Handle PATCH request.
    //
    async update(req, res) {
        if (!req.query.id) {
            return res.status(400).json({ error: "id is required" })
        }

        await this.Model.findByIdAndUpdate(req.query.id, req.body)
            .then((data) => {
                return data
            })
            .catch((error) => {
                return res.status(400).json({ error })
            })

        return res.status(202).json({
            message: "Data was updated successfully",
        })
    }

    //
    // Remove a data instance from the database by id.
    // Handle DELETE request.
    //
    async delete(req, res) {
        if (!req.query.id) {
            return res.status(400).json({ error: "id is required" })
        }

        await this.Model.findByIdAndDelete(req.query.id, req.body).catch(
            (error) => {
                return res.status(400).json({ error })
            }
        )

        return res
            .status(200)
            .json({ message: "Data was deleted successfully" })
    }
}

module.exports = Controller
