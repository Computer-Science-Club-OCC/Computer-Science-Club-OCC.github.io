const Controller = require("../../framework/controller")
const { TagsModel } = require("../../models/tags/tags-model")

const TagsController = new Controller(TagsModel)

module.exports = { TagsController }
