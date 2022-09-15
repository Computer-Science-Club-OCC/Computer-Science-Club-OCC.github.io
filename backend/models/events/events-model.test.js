const mongoose = require("mongoose")
const eventsModel = require("./events-model")
const db = require("../db-test-setup")

// Define test instances here
const event1 = {
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

const event2 = {
    title: "Google Kickstart",
    detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Lectus sit amet est placerat. Nisi quis eleifend quam adipiscing vitae " +
        "proin sagittis. Vestibulum lorem sed risus ultricies tristique nulla " +
        "aliquet enim tortor. Ipsum nunc aliquet bibendum enim facilisis " +
        "gravida Est placerat in egestas erat imperdiet sed euismod nisi porta. ",
    location: "Room 102",
    date: new Date("10-15-2022"),
    createdDate: new Date("09-09-2022"),
    updatedDate: new Date("10-10-2022"),
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
            const event = new eventsModel(event1)
            await event.save()
            const retrievedEvent = await eventsModel.findOne({
                title: "Hackathon",
            })

            // Expected elements
            const expectedTitle = "Hackathon"
            const expectedDetail =
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
                "laboris nisi ut aliquip ex ea commodo consequat. "
            const expectedLocation = "Room 101"
            const expectedDate = new Date("12-24-2022")
            const expectedCreatedDate = new Date("09-27-2022")
            const expectedUpdatedDate = new Date("09-30-2022")

            // Test
            expect(expectedTitle).toEqual(retrievedEvent.title)
            expect(expectedDetail).toEqual(retrievedEvent.detail)
            expect(expectedLocation).toEqual(retrievedEvent.location)
            expect(expectedDate).toEqual(retrievedEvent.date)
            expect(expectedCreatedDate).toEqual(retrievedEvent.createdDate)
            expect(expectedUpdatedDate).toEqual(retrievedEvent.updatedDate)
        })

        test("Add AN Events to Database", async () => {
            const event = new eventsModel(event1)
            const retrievedEvent = await event.save()

            // Expected elements
            const expectedTitle = "Hackathon"
            const expectedDetail =
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
                "laboris nisi ut aliquip ex ea commodo consequat. "
            const expectedLocation = "Room 101"
            const expectedDate = new Date("12-24-2022")
            const expectedCreatedDate = new Date("09-27-2022")
            const expectedUpdatedDate = new Date("09-30-2022")

            // Test
            expect(expectedTitle).toEqual(retrievedEvent.title)
            expect(expectedDetail).toEqual(retrievedEvent.detail)
            expect(expectedLocation).toEqual(retrievedEvent.location)
            expect(expectedDate).toEqual(retrievedEvent.date)
            expect(expectedCreatedDate).toEqual(retrievedEvent.createdDate)
            expect(expectedUpdatedDate).toEqual(retrievedEvent.updatedDate)
        })

        test("Update Event Instance", async () => {
            const event = new eventsModel(event1)
            await event.save()

            event.title = "Hackathon Hyperdrive"
            event.location = "Room 555"
            event.date = new Date("11-18-2022")

            const updatedEvent = await event.save()

            // Expected elements
            const expectedTitle = "Hackathon Hyperdrive" // was Hackathon
            const expectedDetail =
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
                "laboris nisi ut aliquip ex ea commodo consequat. "
            const expectedLocation = "Room 555" // was Room 101
            const expectedDate = new Date("11-18-2022") // was 12-24-2022
            const expectedCreatedDate = new Date("09-27-2022")
            const expectedUpdatedDate = new Date("09-30-2022")

            // Test
            expect(expectedTitle).toEqual(updatedEvent.title)
            expect(expectedDetail).toEqual(updatedEvent.detail)
            expect(expectedLocation).toEqual(updatedEvent.location)
            expect(expectedDate).toEqual(updatedEvent.date)
            expect(expectedCreatedDate).toEqual(updatedEvent.createdDate)
            expect(expectedUpdatedDate).toEqual(updatedEvent.updatedDate)
        })
    })
})
