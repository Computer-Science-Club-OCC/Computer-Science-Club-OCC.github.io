const { TagsModel } = require("./tags-model")
const db = require("../db-test-setup")

// Define test instances here
const testTagCollection = [
    {
        title: "Hackathon",
        created_at: new Date("09-27-2022"),
    },
    {
        title: "Workshop",
        created_at: new Date("09-5-2022"),
    },
    {
        title: "Meeting",
        created_at: new Date("09-10-2022"),
    },
]

// Database for testing
beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())
afterAll(async () => await db.closeDatabase())

// Add your test here
describe("Events Model Tests", () => {
    test("Database Has Tags Model", () => {
        expect(TagsModel).toBeDefined()
    })

    describe("Tag Test Series", () => {
        test("Get Tag Instance from Database", async () => {
            const tag = new TagsModel(testTagCollection[0])
            await tag.save()
            const retrievedTag = await TagsModel.findOne({
                title: "Hackathon",
            })

            // Tests
            expect(retrievedTag._id).toBeDefined()
            expect(retrievedTag.title).toEqual(testTagCollection[0].title)
            expect(retrievedTag.created_at).toEqual(
                testTagCollection[0].created_at
            )
        })
        test("Get Multiple Tags from Database", async () => {
            const tag1 = new TagsModel(testTagCollection[0])
            const tag2 = new TagsModel(testTagCollection[1])
            const tag3 = new TagsModel(testTagCollection[2])
            await tag1.save()
            await tag2.save()
            await tag3.save()
            const retrievedTags = await TagsModel.find()

            // Tests
            expect(retrievedTags).toHaveLength(3)
            expect(retrievedTags[0].title).toEqual(testTagCollection[0].title)
            expect(retrievedTags[1].title).toEqual(testTagCollection[1].title)
            expect(retrievedTags[2].title).toEqual(testTagCollection[2].title)
        })
        test("Add a Tag to Database", async () => {
            const tag = new TagsModel(testTagCollection[2])
            const createdTag = await tag.save()

            // Tests
            expect(createdTag._id).toBeDefined()
            expect(createdTag.title).toEqual(testTagCollection[2].title)
            expect(createdTag.created_at).toEqual(
                testTagCollection[2].created_at
            )
        })
        test("Update a Tag in Database", async () => {
            const tag = new TagsModel(testTagCollection[0])
            const createdTag = await tag.save()

            // Update the tag
            createdTag.title = "Updated Tag"
            const updatedTag = await createdTag.save()

            // Tests
            expect(updatedTag._id).toBeDefined()
            expect(updatedTag.title).toEqual("Updated Tag")
            expect(updatedTag.created_at).toEqual(
                testTagCollection[0].created_at
            )
        })
        test("Delete a Tag from Database", async () => {
            const tag = new TagsModel(testTagCollection[0])
            const createdTag = await tag.save()

            // Delete the tag
            await createdTag.remove()

            // Tests
            const retrievedTag = await TagsModel.findOne({
                title: "Hackathon",
            })
            expect(retrievedTag).toBeNull()
        })
        test("Delete One of Many Tags from Database", async () => {
            const tag1 = new TagsModel(testTagCollection[0])
            const tag2 = new TagsModel(testTagCollection[1])
            const tag3 = new TagsModel(testTagCollection[2])
            await tag1.save()
            await tag2.save()
            await tag3.save()

            await tag2.remove()

            // Tests
            const retrievedTags = await TagsModel.find()
            expect(retrievedTags).toHaveLength(2)
            expect(retrievedTags[0].title).toEqual(testTagCollection[0].title)
            expect(retrievedTags[1].title).toEqual(testTagCollection[2].title)
        })
    })
})
