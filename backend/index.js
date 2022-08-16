const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()
const PORT = process.env.PORT || 8000
require("dotenv/config")

// Add your code here
// Import Routes
const eventsRoute = require("./routes/events")
const projectsRoute = require("./routes/projects")
const tutorialsRoute = require("./routes/tutorials")
const readingsRoute = require("./routes/readings")
const organizationsRoute = require("./routes/organizations")

// Use Routes

// Test backend run
app.get("/", (request, respond) => {
    console.log(
        `${request.protocol}://${request.get("host")}${request.originalUrl}`
    )
    respond.send("<h1>Backend is running!</h1>")
})

app.listen(PORT)
