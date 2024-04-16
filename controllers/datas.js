const Location = require("../models/location")

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

module.exports = {
    createLocation: createLocation,
    getAllLocation: getAllLocation
}