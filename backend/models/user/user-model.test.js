const { UserModel } = require("./user-model")
const db = require("../../utils/test/db-test-setup")

// TODO: Add user activity tests per user

// Define test instances here
const testAdmin = {
    first_name: "Jotaro",
    last_name: "Kujo",
    email: "jotarojujo@gmail.com",
    role: "Admin",
    created_at: new Date("09-23-2022"),
    updated_at: new Date("11-05-2023"),
}

const testMaintainer = {
    first_name: "Dio",
    last_name: "Brando",
    email: "diobrando@gmail.com",
    role: "Maintainer",
    created_at: new Date("10-23-2022"),
    updated_at: new Date("12-08-2023"),
}

// Database for testing
beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())
afterAll(async () => await db.closeDatabase())

// Add your test here
describe("User Model Test", () => {
    test("Database Has User Model", () => {
        expect(UserModel).toBeDefined()
    })

    describe("User Test Series", () => {
        test("Get User Instance from Database", async () => {
            const userInstance = new UserModel(testAdmin)
            await userInstance.save()
            const retrievedUser = await UserModel.findOne({
                first_name: "Jotaro",
            })

            // Tests
            expect(retrievedUser).toBeDefined()
            expect(retrievedUser._id).toBeDefined()
            expect(retrievedUser.first_name).toEqual(testAdmin.first_name)
            expect(retrievedUser.last_name).toEqual(testAdmin.last_name)
            expect(retrievedUser.email).toEqual(testAdmin.email)
            expect(retrievedUser.role).toEqual(testAdmin.role)
            expect(retrievedUser.created_at).toEqual(testAdmin.created_at)
            expect(retrievedUser.updated_at).toEqual(testAdmin.updated_at)
        })

        test("Add an User to Database", async () => {
            const userInstance = new UserModel(testAdmin)
            const createdUser = await userInstance.save()

            // Tests
            expect(createdUser).toBeDefined()
            expect(createdUser._id).toBeDefined()
            expect(createdUser.first_name).toEqual(testAdmin.first_name)
            expect(createdUser.last_name).toEqual(testAdmin.last_name)
            expect(createdUser.role).toEqual(testAdmin.role)
            expect(createdUser.created_at).toEqual(testAdmin.created_at)
            expect(createdUser.updated_at).toEqual(testAdmin.updated_at)
        })

        test("Update an User in Database", async () => {
            const userInstance = new UserModel(testAdmin)
            await userInstance.save()

            // Update the user
            const updatedUser = await UserModel.findOneAndUpdate(
                { first_name: "Jotaro" },
                { ...testMaintainer },
                { new: true }
            )

            // Tests
            expect(updatedUser).toBeDefined()
            expect(updatedUser._id).toBeDefined()
            expect(updatedUser.first_name).toEqual(testMaintainer.first_name)
            expect(updatedUser.last_name).toEqual(testMaintainer.last_name)
            expect(updatedUser.email).toEqual(testMaintainer.email)
            expect(updatedUser.role).toEqual(testMaintainer.role)
            expect(updatedUser.created_at).not.toEqual(
                testMaintainer.created_at
            )
            expect(updatedUser.updated_at).toEqual(testMaintainer.updated_at)
        })

        test("Delete an User from Database", async () => {
            const userInstance = new UserModel(testAdmin)
            await userInstance.save()
            await UserModel.findOneAndDelete({ first_name: "Jotaro" })

            const retrievedUser = await UserModel.findOne({
                first_name: "Jotaro",
            })

            // Tests
            expect(retrievedUser).toBeNull()
        })
    })

    describe("Multiple User Test Series", () => {
        test("UUIDv4 Generate Different ID Per User", async () => {
            const user1 = new UserModel(testAdmin)
            await user1.save()

            const user2 = new UserModel(testMaintainer)
            await user2.save()

            const retrievedUser1 = await UserModel.findOne({
                first_name: "Jotaro",
            })

            const retrievedUser2 = await UserModel.findOne({
                first_name: "Dio",
            })

            expect(retrievedUser1).toBeDefined()
            expect(retrievedUser1._id).toBeDefined()
            expect(retrievedUser2).toBeDefined()
            expect(retrievedUser2._id).toBeDefined()
            expect(retrievedUser1._id).not.toEqual(retrievedUser2._id)
        })
    })
})
