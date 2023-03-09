const app = require("./app")
const mongoose = require("mongoose")
const checkMongoStatus = require("./utils/check-mongo-status")
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost/occ-csc"
const PORT = process.env.PORT || 8000
require("dotenv/config")

// Connect datbase and create collection
mongoose
    .connect(MONGO_URL, { useNewUrlParser: true })
    .then(() => checkMongoStatus.getStatus())
    .catch((error) => {
        console.log(error)
    })

// Run server
app.listen(PORT, () => {
    console.log(`Running backend server on: http://127.0.0.1:${PORT}`)
})

