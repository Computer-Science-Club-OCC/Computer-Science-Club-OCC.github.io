const mongoose = require("mongoose")
const { Schema } = mongoose

const tagSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    created_at: Date,
})

module.exports = mongoose.model("tags", tagSchema)
