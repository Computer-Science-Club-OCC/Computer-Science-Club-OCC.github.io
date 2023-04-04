// const mongoose = require("mongoose")
// const readingsModel = require("./readings-model")
const db = require("../../utils/test/db-test-setup")

// Define test instances here

// Database for testing
beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())
afterAll(async () => await db.closeDatabase())

// Add your test here
describe("Readings Model Tests", () => {
    test("Dummy test", () => {
        expect(true).toBe(true)
    })
})
