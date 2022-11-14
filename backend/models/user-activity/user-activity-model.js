const mongoose = require("mongoose")
const { Schema } = mongoose

const userActivitySchema = new Schema({
    user_id: {
        type: String,
        ref: "user",
    },
    action: {
        type: String,
        default: "",
    },
    created_at: {
        type: Date,
        immutable: true,
        default: Date.now,
    },
})

module.exports = {
    UserActivityModel: mongoose.model("user-activity", userActivitySchema),
    userActivitySchema,
}
