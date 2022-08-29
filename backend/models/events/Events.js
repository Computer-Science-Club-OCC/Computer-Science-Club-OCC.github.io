const mongoose = require("mongoose")
const { Schema } = mongoose
const Image = require("../image/Image")

// Add your code here
const EventSchema = new Schema({
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

module.exports = mongoose.model("event_schema", EventSchema)
