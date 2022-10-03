const express = require("express")
const app = express()
const mongoose = require("mongoose")
// const multer = require("multer")
const checkMongoStatus = require("./utils/check-mongo-status")
const PORT = process.env.PORT || 8000
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost/occ-csc"

require("dotenv/config")

// Connect datbase and create collection
mongoose
    .connect(MONGO_URL)
    .then(() => checkMongoStatus.getStatus())
    .catch((error) => {
        console.log(error)
    })

// Import models
// Notes: remove model imports won't add schemas to cs_club database on Linux
// Will remove model imports once importing routes
require("./models/image/image-model")
require("./models/events/events-model")
require("./models/projects/projects-model")

// Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Import Routes
// const eventsRoute = require("./routes/events/events-route")
// const projectsRoute = require("./routes/projects/projects-route")
// const tutorialsRoute = require("./routes/tutorials/tutorials-route")
// const readingsRoute = require("./routes/readings/readings-route")
// const organizationsRoute = require("./routes/organizations/orgs-route")

// Use Routes
app.get("/", (req, res) => {
    res.send("GET request to the homepage")
})
// Run server
app.listen(PORT, () => {
    console.log(`Running backend server on: http://127.0.0.1:${PORT}`)
})
