const express = require('express');
const router = express.Router();
const dataController = require("../../controllers/datas")

// location
router.post('/create-location', dataController.createLocation)
router.get("/get-locations", dataController.getAllLocation)

// brand
router.post("/create-brand", dataController.createBrand)
router.get("/get-brands", dataController.getAllBrand)

// part
router.post("/create-part", dataController.createPart)
router.get("/get-parts", dataController.getAllPart)

// commodity
router.post("/create-commodity", dataController.createCommodities)
router.get("/get-commodities", dataController.getCommodities)

module.exports = router