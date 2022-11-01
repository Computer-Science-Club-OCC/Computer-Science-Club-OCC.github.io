const mongoose = require("mongoose")
const { Schema } = mongoose

const Roles = ["basic", "admin", "maintainer"]

// Add your code here
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: Roles,
        required: true,
    },
})

module.exports = mongoose.model({ user: userSchema })
