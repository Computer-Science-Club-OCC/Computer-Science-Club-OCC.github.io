const express = require("express")
const app = express()
const mongoose = require("mongoose")
const path = require("path")
const upload = require("./middlewares/upload-static")
const checkMongoStatus = require("./utils/check-mongo-status")
const PORT = process.env.PORT || 8000
require("dotenv/config")

// Base directory
global.__basedir = __dirname

// Connect datbase and create collection
mongoose
    .connect(
        process.env.DATABASE_URI,
        { useNewUrlParser: true },
        { useUnifiedTopology: true }
    )
    .then(() => checkMongoStatus.getStatus())
    .catch((error) => {
        console.log(error)
    })

// Import models
// Notes: remove model imports won't add schemas to cs_club database on Linux
// Will remove model imports once importing routes
require("../backend/models/events/events-model")
require("../backend/models/projects/projects-model")

// Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__basedir + "public")))

// Import Routes
const imagesRoute = require("./routes/images/images-route")
// const eventsRoute = require("./routes/events/events-route")
// const projectsRoute = require("./routes/projects/projects-route")
// const tutorialsRoute = require("./routes/tutorials/tutorials-route")
// const readingsRoute = require("./routes/readings/readings-route")
// const organizationsRoute = require("./routes/organizations/orgs-route")

// Use Routes
app.use("/images", imagesRoute)

// Run server
app.listen(PORT, () => {
    console.log(`Running backend server on: http://127.0.0.1:${PORT}`)
})
