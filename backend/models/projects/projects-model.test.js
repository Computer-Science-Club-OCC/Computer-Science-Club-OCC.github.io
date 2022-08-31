const mongoose = require("mongoose")
const projectsModel = require("./projects-model")
const db = require("../db-test-setup")

// Define test instances here

// Database for testing
beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())
afterAll(async () => await db.closeDatabase())

// Add your test here
describe("Projects Model Tests", () => {
    test("Dummy test", () => {
        expect(true).toBe(true)
    })
})