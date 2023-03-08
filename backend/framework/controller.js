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
    async getAll(req, res) {
        try {
            const instances = await this.Model.find().limit(50)
            res.status(200).send(instances)
        } catch (err) {
            console.log(err)
            return res.send(err)
        }
    }

    // GET - Respond with specific instance
    async getOne(req, res) {
        try {
            const instance = await this.Model.findById(req.params.id)
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
