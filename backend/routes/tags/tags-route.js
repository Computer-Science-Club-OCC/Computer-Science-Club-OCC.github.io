const express = require("express")
const router = express.Router()
const { TagsController } = require("../../controllers/tags/tags-controller")

// Add your code here
router.get("", (req, res) => TagsController.getAll(req, res))
router.get("/tag", (req, res) => TagsController.getOne(req, res))
router.post("", (req, res) => TagsController.create(req, res))
router.patch("/tag", (req, res) => TagsController.update(req, res))
router.delete("/tag", (req, res) => TagsController.delete(req, res))

module.exports = router
