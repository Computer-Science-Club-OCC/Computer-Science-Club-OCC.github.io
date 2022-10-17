const mongoose = require("mongoose")
const { Schema } = mongoose

// Add your code here
const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    detail: {
        type: String,
        required: true,
    },
    location: String,
    date: {
        type: Date,
        required: true,
    },
    createdDate: {
        type: Date,
        immutable: true,
        default: Date.now,
    },
    updatedDate: {
        type: Date,
        default: Date.now,
    },
    images: {
        type: [{ type: String }],
    },
})

module.exports = mongoose.model("events", eventSchema)
