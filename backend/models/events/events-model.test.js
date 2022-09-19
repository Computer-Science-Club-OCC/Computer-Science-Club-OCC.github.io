const eventsModel = require("./events-model")
const db = require("../db-test-setup")

// Define test instances here
const testEvent1 = {
    title: "Hackathon",
    detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
        "laboris nisi ut aliquip ex ea commodo consequat. ",
    location: "Room 101",
    date: new Date("12-24-2022"),
    createdDate: new Date("09-27-2022"),
    updatedDate: new Date("09-30-2022"),
}

// Database for testing
beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())
afterAll(async () => await db.closeDatabase())

// Add your test here
describe("Events Model Tests", () => {
    test("Database Has Events Model", () => {
        expect(eventsModel).toBeDefined()
    })

    describe("Event Test Series", () => {
        test("Get Event Instance from Database", async () => {
            const event = new eventsModel(testEvent1)
            await event.save()
            const retrievedEvent = await eventsModel.findOne({
                title: "Hackathon",
            })

            // Expected value set
            const expectedTitle = testEvent1.title
            const expectedDetail = testEvent1.detail
            const expectedLocation = testEvent1.location
            const expectedDate = testEvent1.date
            const expectedCreatedDate = testEvent1.createdDate
            const expectedUpdatedDate = testEvent1.updatedDate

            // Tests
            expect(expectedTitle).toEqual(retrievedEvent.title)
            expect(expectedDetail).toEqual(retrievedEvent.detail)
            expect(expectedLocation).toEqual(retrievedEvent.location)
            expect(expectedDate).toEqual(retrievedEvent.date)
            expect(expectedCreatedDate).toEqual(retrievedEvent.createdDate)
            expect(expectedUpdatedDate).toEqual(retrievedEvent.updatedDate)
        })

        test("Add an Event to Database", async () => {
            const event = new eventsModel(testEvent1)
            const retrievedEvent = await event.save()

            // Expected value set
            const expectedTitle = testEvent1.title
            const expectedDetail = testEvent1.detail
            const expectedLocation = testEvent1.location
            const expectedDate = testEvent1.date
            const expectedCreatedDate = testEvent1.createdDate
            const expectedUpdatedDate = testEvent1.updatedDate

            // Tests
            expect(expectedTitle).toEqual(retrievedEvent.title)
            expect(expectedDetail).toEqual(retrievedEvent.detail)
            expect(expectedLocation).toEqual(retrievedEvent.location)
            expect(expectedDate).toEqual(retrievedEvent.date)
            expect(expectedCreatedDate).toEqual(retrievedEvent.createdDate)
            expect(expectedUpdatedDate).toEqual(retrievedEvent.updatedDate)
        })

        test("Update the Event Instance", async () => {
            const event = new eventsModel(testEvent1)
            await event.save()

            event.title = "Hackathon Hyperdrive"
            event.detail = "This is the most awesome hackathon!"
            event.location = "Room 555"
            event.date = new Date("11-18-2022")
            event.updatedDate = new Date("10-22-2022")

            const updatedEvent = await event.save()

            // Expected value set
            const expectedTitle = "Hackathon Hyperdrive" // was Hackathon
            const expectedDetail = "This is the most awesome hackathon!" // was "Lorem ipsum dolor...onsequat. "
            const expectedLocation = "Room 555" // was Room 101
            const expectedDate = new Date("11-18-2022") // was 12-24-2022
            const expectedCreatedDate = testEvent1.createdDate // non-updatable
            const expectedUpdatedDate = new Date("10-22-2022") // was 09-30-2022

            // Tests
            expect(expectedTitle).toEqual(updatedEvent.title)
            expect(expectedDetail).toEqual(updatedEvent.detail)
            expect(expectedLocation).toEqual(updatedEvent.location)
            expect(expectedDate).toEqual(updatedEvent.date)
            expect(expectedCreatedDate).toEqual(updatedEvent.createdDate)
            expect(expectedUpdatedDate).toEqual(updatedEvent.updatedDate)
        })

        test("Delete an Event Instance", async () => {
            const event = new eventsModel(testEvent1)
            await event.save()
            await eventsModel.deleteOne({ name: "Hackathon" })
            const retrievedEvent = await eventsModel.findOne({
                name: "Hackathon",
            })

            // Tests
            expect(null).toEqual(retrievedEvent)
        })
    })
})
