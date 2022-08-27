const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const multer = require("multer")
const PORT = process.env.PORT || 8000
require("dotenv/config")

// Connect datbase and create collection
mongoose
    .connect(
        process.env.DATABASE_URI,
        { useNewUrlParser: true },
        { useUnifyTopology: true },
        () => console.log("Connected to datbase!")
    )
    .catch((error) => handleError(error))

// User parsing middleware
app.use(bodyParser.json())

// Import Routes
const eventsRoute = require("./routes/activity/events")
const projectsRoute = require("./routes/activity/projects")
const tutorialsRoute = require("./routes/resources/tutorials")
const readingsRoute = require("./routes/resources/readings")
const organizationsRoute = require("./routes/resources/organizations")

// Use Routes

// Run server
app.listen(PORT, () => {
    console.log(`Running backend server on: http://localhost:${PORT}`)
})
