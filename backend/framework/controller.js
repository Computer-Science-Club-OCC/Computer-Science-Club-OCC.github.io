// --------------------------------------------------------------------------//
//                           Controller Framwork                             //
// --------------------------------------------------------------------------//
// Descriptions:
//      - Controller Framework reduces redundancy same logics among data models
//      when implementing Express js REST API
//      - This framework won't support user and user-related models at the moment
//
//  Usage:
//      1. In controller file of a data model, import Controller class
//      2. Create an instance of the class by assign the data model
//      3. Export the class
//      4. Import the controller instance to the route file
//      5. Add a member function that is suitable for an API method (GET, PUT, PATCH,.. etc)
//          of the routing function

class Controller {
    constructor(model) {
        this.Model = model
    }

    // GET - Respond with limited mutiple instances
    // Use cursor pagination for efficient query
    // Retrieve descending order to show latest items on top
    async getAll(req, res) {
        let prev = req.query.prev
        let next = req.query.next
        let size = parseInt(req.query.size) || 10
        if (size < 1) {
            size = 10
        }
        if (size > 50) {
            size = 10
        }

        try {
            let instances = null

            // Initial query
            if (!prev && !next) {
                instances = await this.Model.find()
                    .sort({ _id: -1 })
                    .limit(size + 1)
                if (instances.length === size + 1) {
                    instances.pop()
                    prev = null
                    next = instances[size - 1]._id
                } else {
                    next = prev = null
                }
            }
            // Follow-up query
            else {
                // set 1 for ascending order to prevent mongoose from retrieving
                // items from beginning if in descending order
                const order = next ? -1 : 1
                const queryCondition = next ? { $lt: next } : { $gt: prev }

                instances = await this.Model.find({ _id: queryCondition })
                    .sort({ _id: order })
                    .limit(size + 1)

                if (instances.length === size + 1) {
                    instances.pop()
                    if (next) {
                        prev = instances[0]._id
                        next = instances[size - 1]._id
                    } else {
                        prev = instances[size - 1]._id
                        next = instances[0]._id
                        instances.reverse()
                    }
                } else {
                    if (next) {
                        prev = instances[0]._id
                        next = null
                    } else {
                        prev = null
                        next = instances[size - 1]._id
                        instances.reverse()
                    }
                }
            }

            return res.status(200).send({
                data: instances,
                cursors: {
                    prev,
                    next,
                },
            })
        } catch (err) {
            console.log(err)
            return res.send(err)
        }
    }

    // GET - Respond with specific instance
    async getOne(req, res) {
        console.log(req.query.id)
        try {
            const instance = await this.Model.findById(req.query.id)
            res.status(200).send(instance)
        } catch (err) {
            res.send(err)
        }
    }

    // POST - Add a new model instance
    async create(req, res) {
        const instance = this.Model(req.body)
        try {
            const newInstance = await instance.save()
            res.status(201).send(newInstance)
            console.log("a new instance was added to database")
        } catch (err) {
            res.send(err)
        }
    }

    // PATCH - Update information for a model instance
    async update(req, res) {
        console.log(req)
    }

    // DELETE - Remove a model instance
    async delete(req, res) {
        console.log(req)
    }
}

module.exports = Controller
