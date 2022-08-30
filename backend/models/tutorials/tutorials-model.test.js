const mongoose = require("mongoose")
const tutorialsModel = require("./tutorials-model")
const db = require("../db-test-setup")

// Define test instances here

// Database for testing
beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())
afterAll(async () => await db.closeDatabase())

// Add your test here
describe("Tutorials Model Tests", () => {
    it("Dummy test", () => {
        expect(true).toBe(true)
    })
})
