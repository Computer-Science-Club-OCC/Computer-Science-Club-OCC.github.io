const express = require("express")
const app = express()
const mongoose = require("mongoose")
const multer = require("multer")
const PORT = process.env.PORT || 8000
require("dotenv/config")

// Connect datbase and create collection
mongoose
    .connect(
        process.env.DATABASE_URI,
        { useNewUrlParser: true },
        { useUnifiedTopology: true },
        () => console.log("Connected to datbase!")
    )
    .catch((error) => {
        console.log(error)
    })

// User parsing middleware

// Import Routes
const eventsRoute = require("./routes/events/events-route")
const projectsRoute = require("./routes/projects/projects-route")
const tutorialsRoute = require("./routes/tutorials/tutorials-route")
const readingsRoute = require("./routes/readings/readings-route")
const organizationsRoute = require("./routes/organizations/orgs-route")

// Use Routes

// Run server
app.listen(PORT, () => {
    console.log(`Running backend server on: http://localhost:${PORT}`)
})
