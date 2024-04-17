const Location = require("../models/location")
const Brand = require("../models/brand")
const Part = require("../models/part")

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


module.exports = {
    createLocation: createLocation,
    getAllLocation: getAllLocation,
    createBrand: createBrand,
    getAllBrand: getAllBrand,
    createPart: createPart,
    getAllPart, getAllPart
}