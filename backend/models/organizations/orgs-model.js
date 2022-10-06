const mongoose = require("mongoose")
const { Schema } = mongoose

const { tagSchema } = require("../tags/tags-model.js")

const orgSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: String,
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

module.exports = mongoose.model("organizations", orgSchema)
