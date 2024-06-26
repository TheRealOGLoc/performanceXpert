const express = require('express');
const router = express.Router();
const dataController = require("../../controllers/datas")

// location
router.post('/create-location', dataController.createLocation)
router.get("/get-locations", dataController.getAllLocation)

// brand
router.post("/create-brand", dataController.createBrand)
router.get("/get-brands", dataController.getAllBrand)
router.post('/find-brand', dataController.findBrand)

// part
router.post("/create-part", dataController.createPart)
router.get("/get-parts", dataController.getAllPart)

// commodity
router.post("/create-commodity", dataController.createCommodities)
router.get("/get-commodities", dataController.getCommodities)
router.post("/search-commodities", dataController.searchCommodities)
router.post("/filter-commodities", dataController.filterCommodities)
router.post("/find-commodity", dataController.findCommodity)
router.post("/find-brand-commodity", dataController.findBrandCommodity)
router.post("/find-part-commodity", dataController.findPartCommodity)
// promotion
router.post("/find-promotion", dataController.findPromotion)

// payment
router.post("/make-payment", dataController.makePayment)

module.exports = router