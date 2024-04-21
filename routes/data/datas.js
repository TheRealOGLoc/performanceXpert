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
router.post("/search-commodities", dataController.searchCommodities)
router.post("/filter-commodities", dataController.filterCommodities)
router.post("/find-commodity", dataController.findCommodity)

// promotion
router.post("/find-promotion", dataController.findPromotion)

module.exports = router