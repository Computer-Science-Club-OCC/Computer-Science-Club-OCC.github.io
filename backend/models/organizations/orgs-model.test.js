const OrgsModel = require("./orgs-model")
const { TagsModel } = require("../tags/tags-model")
const db = require("../../utils/test/db-test-setup")

// Define test instances here
const testTags = [
    {
        title: "hackathon",
        created_at: new Date("01-01-2022"),
    },
    {
        title: "coding",
        created_at: new Date("01-02-2022"),
    },
]
const testOrg1 = {
    name: "Hackathon",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
        "laboris nisi ut aliquip ex ea commodo consequat. ",
    url: "https://www.hackathon.com",
    created_at: new Date("09-27-2022"),
    updated_at: new Date("09-30-2022"),
}

const testOrg2 = {
    name: "Coding Club",
    description:
        "Updated description for Coding Club. " +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    url: "https://www.codingclub.com",
    created_at: new Date("09-22-2022"),
    updated_at: new Date("09-10-2022"),
}

// Database for testing
beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())
afterAll(async () => await db.closeDatabase())

// Add your test here
describe("Organizations Model Tests", () => {
    test("Database Has Organizations Model", () => {
        expect(TagsModel).toBeDefined()
        expect(OrgsModel).toBeDefined()
    })

    describe("Organization Test Series", () => {
        test("Get Organization Instance from Database", async () => {
            const orgInstance = new OrgsModel(testOrg1)
            await orgInstance.save()
            const retrievedOrg = await OrgsModel.findOne({
                name: "Hackathon",
            })

            // Tests
            expect(retrievedOrg).toBeDefined()
            expect(retrievedOrg._id).toBeDefined()
            expect(retrievedOrg.name).toEqual(testOrg1.name)
            expect(retrievedOrg.description).toEqual(testOrg1.description)
            expect(retrievedOrg.url).toEqual(testOrg1.url)
            expect(retrievedOrg.tags).toBeDefined()
            expect(retrievedOrg.created_at).toEqual(testOrg1.created_at)
            expect(retrievedOrg.updated_at).toEqual(testOrg1.updated_at)
        })

        test("Add an Organization to Database", async () => {
            const tagInstance = new TagsModel(testTags[0])
            const orgInstance = await tagInstance.save().then(async (tag) => {
                return new OrgsModel({
                    ...testOrg1,
                    tags: [tag],
                })
            })
            const createdOrg = await orgInstance.save()

            // Tests
            expect(createdOrg).toBeDefined()
            expect(createdOrg._id).toBeDefined()
            expect(createdOrg.name).toEqual(testOrg1.name)
            expect(createdOrg.description).toEqual(testOrg1.description)
            expect(createdOrg.url).toEqual(testOrg1.url)
            expect(createdOrg.tags).toBeDefined()
            expect(createdOrg.tags).toHaveLength(1)
            expect(createdOrg.tags[0].title).toEqual(testTags[0].title)
            expect(createdOrg.created_at).toEqual(testOrg1.created_at)
            expect(createdOrg.updated_at).toEqual(testOrg1.updated_at)
        })

        test("Update an Organization in Database", async () => {
            const tagInstance = new TagsModel(testTags[0])
            const orgInstance = await tagInstance.save().then(async (tag) => {
                return new OrgsModel({
                    ...testOrg1,
                    tags: [tag],
                })
            })
            await orgInstance.save()

            // Update the organization
            const updatedOrg = await OrgsModel.findOneAndUpdate(
                { name: "Hackathon" },
                { ...testOrg2 },
                { new: true }
            )

            // Tests
            expect(updatedOrg).toBeDefined()
            expect(updatedOrg._id).toBeDefined()
            expect(updatedOrg.name).toEqual(testOrg2.name)
            expect(updatedOrg.description).toEqual(testOrg2.description)
            expect(updatedOrg.url).toEqual(testOrg2.url)
            expect(updatedOrg.tags).toBeDefined()
            expect(updatedOrg.tags).toHaveLength(1)
            expect(updatedOrg.tags[0].title).toEqual(testTags[0].title)
            expect(updatedOrg.created_at).not.toEqual(testOrg2.created_at)
            expect(updatedOrg.updated_at).toEqual(testOrg2.updated_at)
        })

        test("Delete an Organization from Database", async () => {
            const tagInstance = new TagsModel(testTags[0])
            const orgInstance = await tagInstance.save().then(async (tag) => {
                return new OrgsModel({
                    ...testOrg1,
                    tags: [tag],
                })
            })
            await orgInstance.save()
            await OrgsModel.findOneAndDelete({ name: "Hackathon" })

            const retrievedOrg = await OrgsModel.findOne({
                name: "Hackathon",
            })

            // Tests
            expect(retrievedOrg).toBeNull()
        })
    })
})
