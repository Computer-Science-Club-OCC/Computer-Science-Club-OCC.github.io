const mongoose = require("mongoose")
const { Schema } = mongoose.Schema
// Add your code here
const ImageSchema = new Schema({
    name: String,
    image: {
        data: Buffer,
        contentType: String,
    },
})

module.exports = new mongoose.model("Image", ImageSchema)
