const express = require('express')
const router = express.Router()
const imageController = require("../../controllers/images")
const multer = require("../../src/utilities/multer")

router.post('/', multer.single('image'), imageController.upload)

module.exports = router