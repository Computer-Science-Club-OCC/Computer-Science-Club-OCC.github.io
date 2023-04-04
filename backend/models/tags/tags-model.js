const mongoose = require("mongoose")
const { Schema } = mongoose

const tagSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    created_at: {
        type: Date,
        immutable: true,
        default: Date.now(),
    },
})

module.exports = {
    TagsModel: mongoose.model("tags", tagSchema),
    tagSchema,
}
