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
const eventsRoute = require("./routes/events/events")
const projectsRoute = require("./routes/projects/projects")
const tutorialsRoute = require("./routes/tutorials/tutorials")
const readingsRoute = require("./routes/readings/readings")
const organizationsRoute = require("./routes/organizations/organizations")

// Use Routes

// Run server
app.listen(PORT, () => {
    console.log(`Running backend server on: http://localhost:${PORT}`)
})
