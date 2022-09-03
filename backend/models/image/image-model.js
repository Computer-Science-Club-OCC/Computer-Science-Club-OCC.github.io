const mongoose = require("mongoose")
const { Schema } = mongoose
// Add your code here
const imageSchema = new Schema({
    name: String,
    image: {
        data: Buffer,
        contentType: String,
    },
})

module.exports = mongoose.model("image", imageSchema)
