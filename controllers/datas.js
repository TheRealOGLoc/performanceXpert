const Location = require("../models/location")
const Brand = require("../models/brand")
const Part = require("../models/part")
const Commodity = require("../models/commodity")

async function createLocation(req, res) {
    const body = req.body
    try {
        const location = await Location.create({
            title: body.title,
            description: body.description,
            lat: parseFloat(body.lat),
            lng: parseFloat(body.lng),
            url: body.url,
            address: body.address,
            rating: parseFloat(body.rating)
        })
        res.json(location)
    } catch(err) {
        console.log(err)
    }
}

async function getAllLocation(req, res) {
    try {
        const locations = await Location.find({})
        res.status(200).json(locations)
    } catch(err) {
        console.log(err)
    }
}

async function createBrand(req, res) {
    const body = req.body
    try {
        const brand = await Brand.create({
            name: body.name,
            description: body.description,
            url: body.url,
        })
        res.json(brand)
    } catch(err) {
        console.log(err)
    }
}

async function getAllBrand(req, res) {
    try {
        const brands = await Brand.find({}).populate("commodity")
        res.status(200).json(brands)
    } catch(err) {
        console.log(err)
    }
}

async function createPart(req, res) {
    const body = req.body
    try {
        const part = await Part.create({
            name: body.name,
        })
        res.json(part)
    } catch(err) {
        console.log(err)
    }
}

async function getAllPart(req, res) {
    try {
        const parts = await Part.find({}).populate("commodity")
        res.status(200).json(parts)
    } catch(err) {
        console.log(err)
    }
}

async function createCommodities(req, res) {
    try {
        const body = req.body
        const brand = body.brand
        const part = body.part
        const commodity = await Commodity.create({
            name: body.name,
            description: body.description,
            url: body.url,
            price: parseFloat(body.price),
            SKU: body.SKU,
            stock: parseFloat(body.stock),
            brand: body.brand,
            part: body.part
        })
        const brandSchema = await Brand.findOne({name: brand})
        brandSchema.commodity.push(commodity)
        await brandSchema.save()
        const partSchema = await Part.findOne({name: part})
        partSchema.commodity.push(commodity)
        await partSchema.save()
        res.status(200).json(commodity)
    } catch (err) {
        console.log(err)
    }
}

async function getCommodities(req, res) {
    try {
        const commodities = await Commodity.find({})
        res.status(200).json(commodities)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    createLocation: createLocation,
    getAllLocation: getAllLocation,
    createBrand: createBrand,
    getAllBrand: getAllBrand,
    createPart: createPart,
    getAllPart, getAllPart,
    createCommodities: createCommodities,
    getCommodities: getCommodities
}