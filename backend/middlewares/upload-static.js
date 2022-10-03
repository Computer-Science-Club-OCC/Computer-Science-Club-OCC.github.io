const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(path.resolve("./"), "public", "uploads"))
    },
    fileFilter: (req, file, cb) => {
        const fileTypes = ["image/jpeg", "image/jpg", "image/png"]
        if (fileTypes.includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(null, false)
        }
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
})

const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
})

module.exports = upload
