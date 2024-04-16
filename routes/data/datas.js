const express = require('express');
const router = express.Router();
const dataController = require("../../controllers/datas")

router.post('/create-location', dataController.createLocation)
router.get("/get-locations", dataController.getAllLocation)

module.exports = router