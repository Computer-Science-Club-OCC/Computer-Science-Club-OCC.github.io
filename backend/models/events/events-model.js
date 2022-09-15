const mongoose = require("mongoose")
const { Schema } = mongoose
const imageSchema = require("../image/image-model")

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
        default: Date,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
    updatedDate: {
        type: Date,
        default: Date.now,
    },
    images: {
        required: false,
        type: [imageSchema.schema],
    },
})

module.exports = mongoose.model("events", eventSchema)
