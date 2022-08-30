const mongoose = require("mongoose")
const imageModel = require("./image-model")
const db = require("../db-test-setup")

// Define test instances here

// Database for testing
beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())
afterAll(async () => await db.closeDatabase())

// Add your test here
describe("Image Model Tests", () => {
    it("Dummy test", () => {
        expect(true).toBe(true)
    })
})
