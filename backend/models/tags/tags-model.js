const mongoose = require("mongoose")
const { Schema } = mongoose

const tagSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        require: true,
    },
})

module.exports = {
    TagsModel: mongoose.model("tags", tagSchema),
    tagSchema,
}
