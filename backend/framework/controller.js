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

const express = require("express")
const app = express()
const mongoose = require("mongoose")

class Controller {
    constructor(model) {
        this.model = model
    }

    // GET - Respond with limited mutiple instances
    async getAll(req, res) {
        await this.model
            .find()
            .limit(50)
            .toArray((err, instances) => {
                if (err) {
                    res.status(400).send("Error fetching listing")
                } else {
                    res.send(result)
                }
            })
    }

    // GET - Respond with specific instances
    async getOne(req, res) {
        await this.model.findById(req.params.id, (err, instance) => {
            if (err) {
                res.status(400).send("Error retrieving instance")
            } else {
                res.send(instance)
            }
        })
    }

    // POST - Add a new model instance
    async create(req, res) {
        const reqData = JSON.parse(req.body)
        const newInsatnce = await new this.model(reqData)
        newInsatnce.save((err) => {
            if (err) {
                res.status(400).send("Error inserting document")
            } else {
                res.status(201).send()
            }
        })
    }

    // PATCH - Update information for a model instance
    async update(req, res) {}

    // DELETE - Remove a model instance
    async delete(req, res) {}
}

module.exports = Controller
