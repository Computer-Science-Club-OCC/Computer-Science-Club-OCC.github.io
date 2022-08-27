const mongoose = require("mongoose")
const { Schema } = mongoose
const ImageType = require("../image/Image")

// Add your code here
const EventsSchema = new Schema({
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
    image: [ImageType],
})

module.exports = mongoose.model("event_schema", EventsSchema)
