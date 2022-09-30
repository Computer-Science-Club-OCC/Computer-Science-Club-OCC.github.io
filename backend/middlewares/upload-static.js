const multer = require("multer")

// Static handler
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
        cb(null, file.fieldname + "-" + uniqueSuffix)
    },
})

const fileFilter = (req, file, cb) => {
    const fileTypes = ["image/jpeg", "image/jpg", "image/png"]
    if (fileTypes.includes(file.mimename)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
})

export default upload
