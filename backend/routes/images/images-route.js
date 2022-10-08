const express = require("express")
const router = express.Router()
const path = require("path")

// image services
router.get("/:pk", (req, res) => {
    res.sendFile(
        path.join(path.resolve("./"), "public", "uploads", `${req.params.pk}`)
    )
})

module.exports = router
