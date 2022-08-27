const mongoose = require("mongoose")
const { MongoMemoryServer } = require("mongodb-memory-server")
const mongod = new MongoMemoryServer()


// Setup database actions for testing schemas
// Connect to database
module.exports.connect = async () => {
  const uri = await mongod.getUri()
  const mongooseOpts = {
    useNewUriParser: true,
    useUnifyTopology: true,
    poolSize: 10
  }

  mongoose.connect(uri, mongooseOpts)
}

// Disconnect 
module.exports.closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop()
}

// Clean up database
module.exports.clearDatabase = async () => {
  const collections = mongoose.connection.collections
  for (const key in collections) {
    const collections = collections[key]
    await collections.deleteMany()
  }
}
