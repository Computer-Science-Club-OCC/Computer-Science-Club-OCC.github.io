const mongoose = require("mongoose")
const { Schema } = mongoose

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
    tags: [String],
    created_at: Date,
    updated_at: Date,
})

module.exports = mongoose.model("organizations", orgSchema)
