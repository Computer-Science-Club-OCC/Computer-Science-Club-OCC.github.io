const mongoose = require("mongoose")
const { Schema } = mongoose

// Notes:
//      - User Action keeps track user activites so that other user can trace back history
//          of activities for server maintaining purposes
//      - User Action instances cannot be removed unless dropping the database
//

const actionType = ["Verify", "Create", "Update", "Delete"]

const userActionSchema = new Schema({
    user: {
        type: String,
        ref: "user",
        immutable: true,
    },
    action: {
        type: String,
        enum: actionType,
        immutable: true,
    },
    detail: {
        type: String,
        require: true,
        immutable: true,
    },
    created_at: {
        type: Date,
        immutable: true,
        default: Date.now,
    },
})

module.exports = {
    UserActionModel: mongoose.model("user-action", userActionSchema),
    userActionSchema,
}
