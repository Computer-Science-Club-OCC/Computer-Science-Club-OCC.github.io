const { UserModel } = require("../user/user-model")
const { UserActionModel } = require("./user-action-model")
const db = require("../db-test-setup")

// Define test instances here
const testUser1 = {
    first_name: "Johnny",
    last_name: "Joestar",
    email: "johnnyjostar@gmail.com",
    role: "Admin",
    created_at: new Date("10-11-2022"),
    updated_at: new Date("11-20-2023"),
}
const user1 = new UserModel(testUser1)
const createdUser1 = user1.save()

const testUser2 = {
    first_name: "Gyro",
    last_name: "Zeppeli",
    email: "gyrozeppeli@gmail.com",
    role: "Maintainer",
    created_at: new Date("10-8-2022"),
    updated_at: new Date("02-02-2023"),
}
const user2 = new UserModel(testUser2)
const createdUser2 = user2.save()

const testAction1 = {
    user: "",
    action: "Create",
    detail: "Add a new Tutorial",
    created_at: new Date("07-04-2020"),
}
testAction1.user = createdUser1._id

const testAction2 = {
    user: "",
    action: "Update",
    detail: "Update description of Project X",
    created_at: new Date("08-25-2021"),
}
testAction2.user = createdUser2._id

// Database for testing
beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())
afterAll(async () => await db.closeDatabase())

// Add your test here
describe("User Action Model Tests", () => {
    test("Database Has User Action Model", () => {
        expect(UserActionModel).toBeDefined()
    })

    describe("User Action Test Series", () => {
        test("Get User Action Instance from Database", async () => {
            const userActionInst = new UserActionModel(testAction1)
            await userActionInst.save()

            const retrievedUserAction = await UserActionModel.findOne({
                user: createdUser1._id,
            })

            // Tests
            expect(retrievedUserAction).toBeDefined()
            expect(retrievedUserAction._id).toBeDefined()
            expect(retrievedUserAction.user).toEqual(testAction1.user)
            expect(retrievedUserAction.action).toEqual(testAction1.action)
            expect(retrievedUserAction.detail).toEqual(testAction1.detail)
            expect(retrievedUserAction.created_at).toEqual(
                testAction1.created_at
            )
        })

        test("Add an User Action to Database", async () => {
            const userActionInst = new UserActionModel(testAction1)
            const createdUserAction = await userActionInst.save()

            // Tests
            expect(createdUserAction).toBeDefined()
            expect(createdUserAction._id).toBeDefined()
            expect(createdUserAction.user).toEqual(testAction1.user)
            expect(createdUserAction.action).toEqual(testAction1.action)
            expect(createdUserAction.detail).toEqual(testAction1.detail)
            expect(createdUserAction.created_at).toEqual(testAction1.created_at)
        })

        test("Fail to update User Action", async () => {
            const userActionInst = new UserActionModel(testAction1)
            await userActionInst.save()

            const updatedUserAction = await UserActionModel.findOneAndUpdate(
                { user: createdUser1._id },
                { ...testAction2 },
                { new: true }
            )

            // Tests
            expect(updatedUserAction).toBeDefined()
            expect(updatedUserAction._id).toBeDefined()
            expect(updatedUserAction.user).toEqual(testAction1.user)
            expect(updatedUserAction.action).toEqual(testAction1.action)
            expect(updatedUserAction.detail).toEqual(testAction1.detail)
            expect(updatedUserAction.created_at).toEqual(testAction1.created_at)
        })
    })
})
