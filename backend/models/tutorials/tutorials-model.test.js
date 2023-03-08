// const mongoose = require("mongoose")
const TutorialsModel = require("./tutorials-model")
const db = require("../db-test-setup")
const { TagsModel } = require("../tags/tags-model")

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

const tutorials1 = {
    title: "Hackathon",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
        "laboris nisi ut aliquip ex ea commodo consequat. ",
    url: "https://www.hackathon.com",
    created_at: new Date("09-27-2022"),
    updated_at: new Date("09-30-2022"),
}

// Database for testing
beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())
afterAll(async () => await db.closeDatabase())

// Add your test here
describe("Tutorials Model Tests", () => {
    test("Database Has Tutorials Model", () => {
        expect(TagsModel).toBeDefined()
        expect(TutorialsModel).toBeDefined()
    })

    describe("Tutorials Test Series", () => {
        test("Get Tutorials Instance from Database", async () => {
            const tutorialsInstance = new TutorialsModel(tutorials1)
            await tutorialsInstance.save()
            const retrievedTutorials = await TutorialsModel.findOne({
                title: "Hackathon",
            })

            // Tests
            expect(retrievedTutorials).toBeDefined()
            expect(retrievedTutorials._id).toBeDefined()
            expect(retrievedTutorials.title).toEqual(tutorials1.title)
            expect(retrievedTutorials.description).toEqual(
                tutorials1.description
            )
            expect(retrievedTutorials.url).toEqual(tutorials1.url)
            expect(retrievedTutorials.tags).toBeDefined()
            expect(retrievedTutorials.created_at).toEqual(tutorials1.created_at)
            expect(retrievedTutorials.updated_at).toEqual(tutorials1.updated_at)
        })

        test("Add an Tutorial to database", async () => {
            const tagInstance = new TagsModel(testTags[0])
            const tutorialInstance = await tagInstance
                .save()
                .then(async (tag) => {
                    return new TutorialsModel({
                        ...tutorials1,
                        tags: [tag],
                    })
                })

            const savedTutorials = await tutorialInstance.save()

            // Tests
            expect(savedTutorials).toBeDefined()
            expect(savedTutorials._id).toBeDefined()
            expect(savedTutorials.title).toEqual(tutorials1.title)
            expect(savedTutorials.description).toEqual(tutorials1.description)
            expect(savedTutorials.url).toEqual(tutorials1.url)
            expect(savedTutorials.tags).toBeDefined()
            expect(savedTutorials.tags).toHaveLength(1)
            expect(savedTutorials.tags[0].title).toEqual(testTags[0].title)
            expect(savedTutorials.created_at).toEqual(tutorials1.created_at)
            expect(savedTutorials.updated_at).toEqual(tutorials1.updated_at)
        })

        test("Update an Tutorial in database", async () => {
            const tagInstance = new TagsModel(testTags[0])
            const tutorialInstance = await tagInstance
                .save()
                .then(async (tag) => {
                    return new TutorialsModel({
                        ...tutorials1,
                        tags: [tag],
                    })
                })
            await tutorialInstance.save()
            const updatedTutorials = await TutorialsModel.findOneAndUpdate(
                { title: "Hackathon" },
                { title: "Hackathon 2022" },
                { new: true }
            )

            // Tests
            expect(updatedTutorials).toBeDefined()
            expect(updatedTutorials._id).toBeDefined()
            expect(updatedTutorials.title).toEqual("Hackathon 2022")
            expect(updatedTutorials.description).toEqual(tutorials1.description)
            expect(updatedTutorials.url).toEqual(tutorials1.url)
            expect(updatedTutorials.tags).toBeDefined()
            expect(updatedTutorials.tags).toHaveLength(1)
            expect(updatedTutorials.tags[0].title).toEqual(testTags[0].title)
            expect(updatedTutorials.created_at).toEqual(tutorials1.created_at)
            expect(updatedTutorials.updated_at).toEqual(tutorials1.updated_at)
        })

        test("Delete an Tutorial from database", async () => {
            const tagInstance = new TagsModel(testTags[0])
            const tutorialInstance = await tagInstance
                .save()
                .then(async (tag) => {
                    return new TutorialsModel({
                        ...tutorials1,
                        tags: [tag],
                    })
                })
            await tutorialInstance.save()
            await TutorialsModel.findOneAndDelete({
                title: "Hackathon",
            })

            const deletedTutorial = await TutorialsModel.findOne({
                title: "Hackathon",
            })

            // Tests
            expect(deletedTutorial).toBeNull()
        })
    })
})
