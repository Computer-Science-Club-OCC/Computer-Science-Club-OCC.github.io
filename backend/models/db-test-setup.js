const mongoose = require("mongoose")
const { MongoMemoryServer } = require("mongodb-memory-server")

let mongod = undefined

// Setup database actions for testing schemas
// Connect to database
module.exports.connect = async () => {
    mongod = await MongoMemoryServer.create()
    const uri = mongod.getUri()

    mongoose.connect(uri, {
        dbName: "cs_club_test",
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: 10,
    })
}

// Disconnect
module.exports.closeDatabase = async () => {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
    await mongod.stop()
}

// Clean up database
module.exports.clearDatabase = async () => {
    if (mongod) {
        const collections = mongoose.connection.collections
        for (const key in collections) {
            const collection = collections[key]
            collection.deleteMany()
        }
    }
}
