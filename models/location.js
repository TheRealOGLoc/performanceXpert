const mongoose = require("mongoose")
const Schema = mongoose.Schema

const locationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
},  {
    timestamps: true
})

module.exports = mongoose.model("Location", locationSchema)