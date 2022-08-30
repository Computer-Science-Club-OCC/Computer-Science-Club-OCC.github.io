const mongoose = require("mongoose")
const { Schema } = mongoose
const imageModel = require("../image/image-model")

// Add your code here
const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: String,
    date: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("events", eventSchema)
