// const mongoose = require("mongoose")
const ProjectsModel = require("./projects-model")
const db = require("../db-test-setup")

// Define test instances here
const testProject1 = {
    title: "Project 1",
    status: "In Progress",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
        "laboris nisi ut aliquip ex ea commodo consequat. ",
    start_date: new Date("12-24-2022"),
    end_date: new Date("12-24-2023"),
    discord_url: "https://discord.gg/12345",
    github_url: "github.com/12345",
    demo_url: "https://demo.com/12345",
    created_at: new Date("09-27-2022"),
    updated_at: new Date("09-30-2022"),
}

// Database for testing
beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())
afterAll(async () => await db.closeDatabase())

// Add your test here
describe("Projects Model Tests", () => {
    test("Database Has Projects Model", () => {
        expect(ProjectsModel).toBeDefined()
    })

    describe("Project Test Series", () => {
        test("Get Project Instance from Database", async () => {
            const project = new ProjectsModel(testProject1)
            await project.save()
            const retrievedProject = await ProjectsModel.findOne({
                title: "Project 1",
            })

            // Expected value set
            const expectedTitle = testProject1.title
            const expectedStatus = testProject1.status
            const expectedDescription = testProject1.description
            const expectedStartDate = testProject1.start_date
            const expectedEndDate = testProject1.end_date
            const expectedDiscordUrl = testProject1.discord_url
            const expectedGithubUrl = testProject1.github_url
            const expectedDemoUrl = testProject1.demo_url
            const expectedCreatedAt = testProject1.created_at
            const expectedUpdatedAt = testProject1.updated_at

            // Tests
            expect(expectedTitle).toEqual(retrievedProject.title)
            expect(expectedStatus).toEqual(retrievedProject.status)
            expect(expectedDescription).toEqual(retrievedProject.description)
            expect(expectedStartDate).toEqual(retrievedProject.start_date)
            expect(expectedEndDate).toEqual(retrievedProject.end_date)
            expect(expectedDiscordUrl).toEqual(retrievedProject.discord_url)
            expect(expectedGithubUrl).toEqual(retrievedProject.github_url)
            expect(expectedDemoUrl).toEqual(retrievedProject.demo_url)
            expect(expectedCreatedAt).toEqual(retrievedProject.created_at)
            expect(expectedUpdatedAt).toEqual(retrievedProject.updated_at)
        })

        test("Add a Project to Database", async () => {
            const project = new ProjectsModel(testProject1)

            const createdProject = await project.save()

            // Expected value set
            const expectedTitle = testProject1.title
            const expectedStatus = testProject1.status
            const expectedDescription = testProject1.description
            const expectedStartDate = testProject1.start_date
            const expectedEndDate = testProject1.end_date
            const expectedDiscordUrl = testProject1.discord_url
            const expectedGithubUrl = testProject1.github_url
            const expectedDemoUrl = testProject1.demo_url
            const expectedCreatedAt = testProject1.created_at
            const expectedUpdatedAt = testProject1.updated_at

            // Tests
            expect(createdProject.title).toEqual(expectedTitle)
            expect(createdProject.status).toEqual(expectedStatus)
            expect(createdProject.description).toEqual(expectedDescription)
            expect(createdProject.start_date).toEqual(expectedStartDate)
            expect(createdProject.end_date).toEqual(expectedEndDate)
            expect(createdProject.discord_url).toEqual(expectedDiscordUrl)
            expect(createdProject.github_url).toEqual(expectedGithubUrl)
            expect(createdProject.demo_url).toEqual(expectedDemoUrl)
            expect(createdProject.created_at).toEqual(expectedCreatedAt)
            expect(createdProject.updated_at).toEqual(expectedUpdatedAt)
        })

        test("Update a Project in Database", async () => {
            const project = new ProjectsModel(testProject1)
            await project.save()

            const updatedValues = {
                title: "Project 1 Updated",
                status: "Completed",
                description: "Updated Description",
                start_date: new Date("12-24-2022"),
                end_date: new Date("12-24-2023"),
                discord_url: "https://discord.gg/12345",
                github_url: "https://github.com/12345",
                demo_url: "https://demo.com/12345",
                created_at: new Date("09-27-2022"),
                updated_at: new Date("09-30-2022"),
            }

            // Update values
            project.title = updatedValues.title
            project.status = updatedValues.status
            project.description = updatedValues.description
            project.start_date = updatedValues.start_date
            project.end_date = updatedValues.end_date
            project.discord_url = updatedValues.discord_url
            project.github_url = updatedValues.github_url
            project.demo_url = updatedValues.demo_url
            project.created_at = updatedValues.created_at
            project.updated_at = updatedValues.updated_at

            const updatedProject = await project.save()

            // Tests
            expect(updatedProject._id).toBeDefined()
            expect(updatedProject.title).toEqual(updatedValues.title)
            expect(updatedProject.status).toEqual(updatedValues.status)
            expect(updatedProject.description).toEqual(
                updatedValues.description
            )
            expect(updatedProject.start_date).toEqual(updatedValues.start_date)
            expect(updatedProject.end_date).toEqual(updatedValues.end_date)
            expect(updatedProject.discord_url).toEqual(
                updatedValues.discord_url
            )
            expect(updatedProject.github_url).toEqual(updatedValues.github_url)
            expect(updatedProject.demo_url).toEqual(updatedValues.demo_url)
            expect(updatedProject.created_at).toEqual(updatedValues.created_at)
            expect(updatedProject.updated_at).toEqual(updatedValues.updated_at)
        })

        test("Delete a Project from Database", async () => {
            const project = new ProjectsModel(testProject1)
            await project.save()
            const retrievedProject = await ProjectsModel.findOne({
                title: "Project 1",
            })

            await retrievedProject.remove()

            const deletedProject = await ProjectsModel.findOne({
                title: "Project 1",
            })

            expect(deletedProject).toBeNull()
        })
    })
})
