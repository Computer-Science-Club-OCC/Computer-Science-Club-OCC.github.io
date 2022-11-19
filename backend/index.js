const express = require("express")
const app = express()
const mongoose = require("mongoose")
// const passport = require("passport")
// const magicLogin = require("passport-magic-login")
const path = require("path")
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
require("./models/events/events-model")
require("./models/tags/tags-model")
require("./models/projects/projects-model")
require("./models/organizations/orgs-model")

// Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(path.resolve("./"), "public")))

// Import Routes
const imagesRoute = require("./routes/images/images-route")
const tagsRoute = require("./routes/tags/tags-route")
// const eventsRoute = require("./routes/events/events-route")
// const projectsRoute = require("./routes/projects/projects-route")
// const tutorialsRoute = require("./routes/tutorials/tutorials-route")
// const readingsRoute = require("./routes/readings/readings-route")
// const organizationsRoute = require("./routes/organizations/orgs-route")

// Use Routes
app.use("/images", imagesRoute)
app.use("/tags", tagsRoute)

app.get("/", (req, res) => {
    res.send("GET request to the homepage")
})

// Run server
app.listen(PORT, () => {
    console.log(`Running backend server on: http://127.0.0.1:${PORT}`)
})
