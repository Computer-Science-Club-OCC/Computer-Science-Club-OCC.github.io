const supertest = require("supertest")
const app = require("../../app")
const request = supertest(app)
const { TagsModel } = require("../../models/tags/tags-model")
const tagsTestCases = require("../../utils/test/data/tags.data.json")
const db = require("../../utils/test/db-test-setup")
const config = require("../../config")

// Add your test here
beforeAll(async () => await db.connect())
afterAll(async () => await db.closeDatabase())

describe("API Tests - Single Tag Endpoints", () => {
    test("Database has Tags Model", () => {
        expect(TagsModel).toBeDefined()
    })

    test("GET - Retrieve a tag by id", async () => {
        const data = tagsTestCases[0]
        const tag = new TagsModel(data)
        await tag.save()

        expect(tag._id).toBeDefined() // Check if tag was created sucessfully

        // Send request
        const res = await request.get(`/api/tags/tag?id=${tag._id.valueOf()}`)

        // Tests
        expect(res.status).toEqual(200)
        expect(res.body).toBeTruthy()
        expect(res.body.title).toEqual(tag.title)
        expect(new Date(res.body.created_at)).toEqual(tag.created_at)
    })

    test("POST - Add a new tag to database", async () => {
        const data = tagsTestCases[15]

        // Send request
        const res = await request.post("/api/tags").send(data)

        // Tests
        expect(res.status).toEqual(201)
        expect(res.body).toBeTruthy()
        expect(res.body.data.title).toEqual(data.title)
        expect(new Date(res.body.data.created_at)).toEqual(
            new Date(data.created_at)
        )
    })

    test("PATCH - /api/tags/tag", async () => {
        const data = tagsTestCases[1]
        const changeData = { title: "Dio", created_at: "03/01/2020" }
        const tag = new TagsModel(data)
        const retrievedTag = await tag.save()

        // Send request
        const res = await request
            .patch(`/api/tags/tag/?id=${retrievedTag._id}`)
            .send(changeData)

        // Tests
        expect(res.status).toEqual(202)
        expect(res.body).toBeTruthy()

        const updatedTag = await TagsModel.findById(retrievedTag._id)
        expect(updatedTag.title).toEqual(changeData.title)
        expect(updatedTag.created_at).toEqual(retrievedTag.created_at)
    })

    test("DELETE - Remove a tag from database by id", async () => {
        const data = tagsTestCases[2]
        const tag = new TagsModel(data)
        const retrievedTag = await tag.save()

        // Send request
        const res = await request.delete(`/api/tags/tag?id=${retrievedTag._id}`)

        // Tests
        expect(res.status).toEqual(200)
        expect(res.body).toBeTruthy()
        const deletedTag = await TagsModel.findOne({ title: data.title })
        expect(deletedTag).toBeNull()
    })

    afterEach(async () => await db.clearDatabase())
})

describe("API Tests - Tags Pagination", () => {
    test(`Fetch ${config.defaultPageSize} tag instances, page 1`, async () => {
        // Create multiple tag instances. Initialize data in the first test
        // Populated data is still available for following tests
        await TagsModel.insertMany(tagsTestCases)

        // Send request
        const res = await request.get("/api/tags")

        // Tests
        const prevTag = await TagsModel.findById(res.body.cursors.prev)
        const nextTag = await TagsModel.findById(res.body.cursors.next)

        expect(res.status).toEqual(200)
        expect(res.body).toBeTruthy()
        expect(res.body.total).toEqual(tagsTestCases.length)
        expect(res.body.size).toEqual(config.defaultPageSize)
        expect(prevTag).toBeNull() // previous cursor should be null in first page
        expect(nextTag).toBeTruthy()

        // Check every retrieved instance
        for (let i = 0; i < res.body.data.length; i += 1) {
            // Start from the last index of test cases list
            const testCaseIndex = tagsTestCases.length - 1 - i

            expect(res.body.data[i].title).toEqual(
                tagsTestCases[testCaseIndex].title
            )
            expect(new Date(res.body.data[i].created_at)).toEqual(
                new Date(tagsTestCases[testCaseIndex].created_at)
            )
        }
    })

    test(`Fetch next ${config.defaultPageSize} tag instances, from page 1 to 2`, async () => {
        // Get 10th tag by descending order
        const next = await TagsModel.findOne().sort({ _id: -1 }).skip(9)
        expect(next).toBeTruthy()

        // Send request
        const res = await request.get(`/api/tags/?next=${next._id}`)

        // Tests
        expect(res.status).toEqual(200)
        expect(res.body).toBeTruthy()
        expect(res.body.total).toEqual(tagsTestCases.length)
        expect(res.body.size).toEqual(config.defaultPageSize)

        const prevTag = await TagsModel.findById(res.body.cursors.prev)
        const nextTag = await TagsModel.findById(res.body.cursors.next)

        expect(prevTag).toBeTruthy()
        expect(nextTag).toBeTruthy()

        // Check every retrieved instance
        for (let i = 0; i < res.body.data.length; i += 1) {
            // Start from last 11th index from the last index test cases list
            const testCaseIndex =
                tagsTestCases.length - config.defaultPageSize - 1 - i

            expect(res.body.data[i].title).toEqual(
                tagsTestCases[testCaseIndex].title
            )
            expect(new Date(res.body.data[i].created_at)).toEqual(
                new Date(tagsTestCases[testCaseIndex].created_at)
            )
        }
    })

    test(`Fetch prev ${config.defaultPageSize} tag instances, from page 3 to 2`, async () => {
        // Get 10th tag by descending order
        const prev = await TagsModel.findOne().sort({ _id: -1 }).skip(19)
        expect(prev).toBeTruthy()

        // Send request
        const res = await request.get(`/api/tags/?next=${prev._id}`)

        // Tests
        expect(res.status).toEqual(200)
        expect(res.body).toBeTruthy()
        expect(res.body.total).toEqual(tagsTestCases.length)
        expect(res.body.size).toEqual(config.defaultPageSize)

        const prevTag = await TagsModel.findById(res.body.cursors.prev)
        const nextTag = await TagsModel.findById(res.body.cursors.next)

        expect(prevTag).toBeTruthy()
        expect(nextTag).toBeTruthy()

        // Check every retrieved instance
        for (let i = 0; i < res.body.data.length; i += 1) {
            // Start from last 11th index from the last index test cases list
            const testCaseIndex =
                tagsTestCases.length - config.defaultPageSize * 2 - 1 - i

            expect(res.body.data[i].title).toEqual(
                tagsTestCases[testCaseIndex].title
            )
            expect(new Date(res.body.data[i].created_at)).toEqual(
                new Date(tagsTestCases[testCaseIndex].created_at)
            )
        }
    })

    test(`Fetch tag instances from the last page`, async () => {
        // Calculate last page size. Expect from 1 to pagesize
        const size = tagsTestCases.length % config.defaultPageSize
        const actualSize = size !== 0 ? size : config.defaultPageSize

        // Send request
        const res = await request.get(`/api/tags/?last=true`)

        // Tests
        expect(res.status).toEqual(200)
        expect(res.body).toBeTruthy()
        expect(res.body.total).toEqual(tagsTestCases.length)
        expect(res.body.size).toEqual(actualSize)

        const prevTag = await TagsModel.exists({ _id: res.body.cursors.prev })
        const nextTag = await TagsModel.exists({ _id: res.body.cursors.next })

        expect(prevTag).toBeTruthy()
        expect(nextTag).toBeFalsy()

        // Check every retrieved instance
        for (let i = 0; i < actualSize; i += 1) {
            // Start from last 11th index from the last index test cases list
            expect(res.body.data[i].title).toEqual(
                tagsTestCases[actualSize - i - 1].title
            )
            expect(new Date(res.body.data[i].created_at)).toEqual(
                new Date(tagsTestCases[actualSize - i - 1].created_at)
            )
        }
    })

    test(`Fetch tag instances with more than default ${config.defaultPageSize} items per page`, async () => {
        // Query size from frontend can be 10 | 20 | 30 | 40 | 50 .. items per page
        const querySize = 30

        // Send request
        const res = await request.get(`/api/tags/?size=${querySize}`)

        // Tests
        expect(res.status).toEqual(200)
        expect(res.body).toBeTruthy()
        expect(res.body.total).toEqual(tagsTestCases.length)
        expect(res.body.size).toEqual(querySize)

        const prevTag = await TagsModel.exists({ _id: res.body.cursors.prev })
        const nextTag = await TagsModel.exists({ _id: res.body.cursors.next })

        expect(prevTag).toBeFalsy()
        expect(nextTag).toBeTruthy()

        // Check every retrieved instance
        for (let i = 0; i < querySize; i += 1) {
            // Start from last 11th index from the last index test cases list
            expect(res.body.data[i].title).toEqual(
                tagsTestCases[tagsTestCases.length - i - 1].title
            )
            expect(new Date(res.body.data[i].created_at)).toEqual(
                new Date(tagsTestCases[tagsTestCases.length - i - 1].created_at)
            )
        }
    })

    test(`Fetch tag instances with more than maximum ${config.defaultMaxPageSize} items per page`, async () => {
        // Calculate last page size. Expect from 1 to pagesize
        const maxSize = config.defaultMaxPageSize

        // Send request
        const res = await request.get(`/api/tags/?size=${maxSize + 17}`)

        // Tests
        expect(res.status).toEqual(200)
        expect(res.body).toBeTruthy()
        expect(res.body.total).toEqual(tagsTestCases.length)
        expect(res.body.size).toEqual(maxSize)

        const prevTag = await TagsModel.exists({ _id: res.body.cursors.prev })
        const nextTag = await TagsModel.exists({ _id: res.body.cursors.next })

        expect(prevTag).toBeFalsy()
        expect(nextTag).toBeTruthy()

        // Check every retrieved instance
        for (let i = 0; i < maxSize; i += 1) {
            // Start from last index
            expect(res.body.data[i].title).toEqual(
                tagsTestCases[tagsTestCases.length - i - 1].title
            )
            expect(new Date(res.body.data[i].created_at)).toEqual(
                new Date(tagsTestCases[tagsTestCases.length - i - 1].created_at)
            )
        }
    })
})
