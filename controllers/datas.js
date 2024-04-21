const Location = require("../models/location")
const Brand = require("../models/brand")
const Part = require("../models/part")
const Commodity = require("../models/commodity")
const Promotion = require("../models/promotion")

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
    } catch (err) {
        console.log(err)
    }
}

async function getAllLocation(req, res) {
    try {
        const locations = await Location.find({})
        res.status(200).json(locations)
    } catch (err) {
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
    } catch (err) {
        console.log(err)
    }
}

async function getAllBrand(req, res) {
    try {
        const brands = await Brand.find({}).populate("commodity")
        res.status(200).json(brands)
    } catch (err) {
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
    } catch (err) {
        console.log(err)
    }
}

async function getAllPart(req, res) {
    try {
        const parts = await Part.find({}).populate("commodity")
        res.status(200).json(parts)
    } catch (err) {
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
        const brandSchema = await Brand.findOne({ name: brand })
        brandSchema.commodity.push(commodity)
        await brandSchema.save()
        const partSchema = await Part.findOne({ name: part })
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

async function searchCommodities(req, res) {
    try {
        const search = req.body.searching.toLowerCase();
        const commodities = await Commodity.find({ name: { $regex: new RegExp(search, 'i') } });
        res.status(200).json(commodities);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function filterCommodities(req, res) {

    try {
        const { searching, brands, parts, sort } = req.body;

        const search = searching.toLowerCase();

        const baseQuery = { name: { $regex: new RegExp(search, 'i') } };

        for (const brand in brands) {
            if (brands[brand] === null) {
                delete brands[brand]
            }
        }

        for (const part in parts) {
            if (parts[part] === null) {
                delete parts[part]
            }
        }

        if (brands && Object.keys(brands).length > 0) {
            const brandQuery = { brand: { $in: Object.keys(brands) } };
            Object.assign(baseQuery, brandQuery);
        }

        if (parts && Object.keys(parts).length > 0) {
            const partQuery = { part: { $in: Object.keys(parts) } };
            Object.assign(baseQuery, partQuery);
        }
        let commodities = null
        const numSort = parseInt(sort)
        if (!numSort) {
            commodities = await Commodity.find(baseQuery);
        } else {
            commodities = await Commodity.find(baseQuery).sort({ price: numSort })
        }
        res.status(200).json(commodities);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

async function findCommodity(req, res) {
    try {
        const body = req.body
        const item = await Commodity.findById(body.id)
        res.status(200).json(item)
    } catch (err) {
        console.log(err)
    }
}

async function findPromotion(req, res) {
    try {
        const body = req.body
        const promotion = await Promotion.findOne({code: body.code})
        res.status(200).json(promotion)
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
    getCommodities: getCommodities,
    searchCommodities: searchCommodities,
    filterCommodities: filterCommodities,
    findCommodity:findCommodity,
    findPromotion: findPromotion
}