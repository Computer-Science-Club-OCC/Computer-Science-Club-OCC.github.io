const mongoose = require("mongoose")
const uuid = require("uuid")
const { userActivitySchema } = require("../user-action/user-action-model")
const { isEmail } = require("validator")
const { Schema } = mongoose

const Roles = ["Admin", "Maintainer"]

// Add your code here
const userSchema = new Schema({
    _id: {
        type: String,
        immutable: true,
        default: uuid.v4,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        validate: [isEmail, "invalid email"],
        required: true,
    },
    role: {
        type: String,
        enum: Roles,
        default: "Maintainer",
        required: true,
    },
    created_at: {
        type: Date,
        immutable: true,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
    action_log: {
        type: [userActivitySchema],
    },
})

module.exports = {
    UserModel: mongoose.model("user", userSchema),
}
