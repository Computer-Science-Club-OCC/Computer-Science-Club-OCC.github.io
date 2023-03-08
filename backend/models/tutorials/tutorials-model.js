const mongoose = require("mongoose")
const { Schema } = mongoose

const { tagSchema } = require("../tags/tags-model.js")

const tutorialsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    tags: {
        type: [tagSchema],
    },
    created_at: {
        type: Date,
        immutable: true,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("tutorials", tutorialsSchema)
