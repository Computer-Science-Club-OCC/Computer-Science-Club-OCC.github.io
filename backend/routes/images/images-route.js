const express = require("express")
const router = express.Router()
const path = require("path")

// images services
router.get("/:pk", (req, res) => {
    res.sendFile(path.join(__basedir, `/public/uploads/${res.params.pk}`))
})

module.exports = router
