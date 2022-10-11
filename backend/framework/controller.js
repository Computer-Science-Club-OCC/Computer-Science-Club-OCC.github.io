// --------------------------------------------------------------------------//
//                           Controller Framwork                            //
// --------------------------------------------------------------------------//
// Descriptions:
//      ControllerFramework reduces redundancy same logics among models
//      when implementing Express js REST API
//  Usage:
//      Create a class instance by assigning mongoose model  in controller file
//      Import it in route file and call the function that corresponding REST API methods

const express = require("express")
const app = express()
const mongoose = require("mongoose")

// TODO:
//      - Add permission feature to POST, PATCH, DELETE methods
//      - Match specific fields to update in PATCH method
class Controller {
    constructor(model) {
        this.model = model
    }

    printModel() {
        console.log(this.model)
        console.log(Object.keys(this.model.schema.paths))
    }

    // GET - Respond with limited mutiple instances
    async list(req, res) {
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
    async retrieve(req, res) {
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
