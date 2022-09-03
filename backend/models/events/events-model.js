const mongoose = require("mongoose")
const { Schema } = mongoose
const imageSchema = mongoose.model("image").schema

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
        default: Date.now,
    },
    images: [imageSchema],
})

module.exports = mongoose.model("events", eventSchema)
