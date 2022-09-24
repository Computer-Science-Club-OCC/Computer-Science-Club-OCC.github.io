const OrgsModel = require("./orgs-model")
const db = require("../db-test-setup")

// Define test instances here
const testOrg1 = {
    name: "Hackathon",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
        "laboris nisi ut aliquip ex ea commodo consequat. ",
    url: "https://www.hackathon.com",
    tags: ["hackathon", "coding", "software"],
    created_at: new Date("09-27-2022"),
    updated_at: new Date("09-30-2022"),
}

// Database for testing
beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())
afterAll(async () => await db.closeDatabase())

// Add your test here
describe("Organizations Model Tests", () => {
    test("Database Has Organizations Model", () => {
        expect(OrgsModel).toBeDefined()
    })

    describe("Organization Test Series", () => {
        test("Get Organization Instance from Database", async () => {
            const org = new OrgsModel(testOrg1)
            await org.save()
            const retrievedOrg = await OrgsModel.findOne({
                name: "Hackathon",
            })

            // Expected value set
            const expectedName = testOrg1.name
            const expectedDescription = testOrg1.description
            const expectedUrl = testOrg1.url
            const expectedTags = testOrg1.tags
            const expectedCreatedDate = testOrg1.created_at
            const expectedUpdatedDate = testOrg1.updated_at

            // Tests
            expect(retrievedOrg).toBeDefined()
            expect(retrievedOrg.name).toEqual(expectedName)
            expect(retrievedOrg.description).toEqual(expectedDescription)
            expect(retrievedOrg.url).toEqual(expectedUrl)
            expect(retrievedOrg.tags).toEqual(expectedTags)
            expect(retrievedOrg.created_at).toEqual(expectedCreatedDate)
            expect(retrievedOrg.updated_at).toEqual(expectedUpdatedDate)
        })

        test("Add an Organization to Database", async () => {
            const org = new OrgsModel(testOrg1)

            const createdOrg = await org.save()

            // Expected value set
            const expectedName = testOrg1.name
            const expectedDescription = testOrg1.description
            const expectedUrl = testOrg1.url
            const expectedTags = testOrg1.tags
            const expectedCreatedDate = testOrg1.created_at
            const expectedUpdatedDate = testOrg1.updated_at

            // Tests
            expect(createdOrg._id).toBeDefined()
            expect(createdOrg.name).toEqual(expectedName)
            expect(createdOrg.description).toEqual(expectedDescription)
            expect(createdOrg.url).toEqual(expectedUrl)
            expect(createdOrg.tags).toEqual(expectedTags)
            expect(createdOrg.created_at).toEqual(expectedCreatedDate)
            expect(createdOrg.updated_at).toEqual(expectedUpdatedDate)
        })

        test("Update an Organization in Database", async () => {
            const org = new OrgsModel(testOrg1)
            await org.save()

            // Expected value set
            const updatedName = "Hackathon Hyperdrive"
            const updatedDescription = "Hackathon Hyperdrive is a hackathon"
            const updatedUrl = "https://www.hackathonhyperdrive.com"
            const updatedTags = [
                "hackathon",
                "coding",
                "software",
                "hyperdrive",
            ]
            const updatedUpdatedDate = new Date("09-30-2022")

            const updatedOrg = await OrgsModel.findOneAndUpdate(
                { name: "Hackathon" },
                {
                    name: updatedName,
                    description: updatedDescription,
                    url: updatedUrl,
                    tags: updatedTags,
                    updated_at: updatedUpdatedDate,
                },
                { new: true }
            )

            // Tests
            expect(updatedOrg.name).toEqual(updatedName)
            expect(updatedOrg.description).toEqual(updatedDescription)
            expect(updatedOrg.url).toEqual(updatedUrl)
            expect(updatedOrg.tags).toEqual(updatedTags)
            expect(updatedOrg.created_at).toEqual(testOrg1.created_at)
            expect(updatedOrg.updated_at).toEqual(updatedUpdatedDate)
        })

        test("Delete an Organization from Database", async () => {
            const org = new OrgsModel(testOrg1)
            await org.save()
            await org.delete()

            const retrievedOrg = await OrgsModel.findOne({
                name: "Hackathon",
            })

            // Tests
            expect(retrievedOrg).toBeNull()
        })
    })
})
