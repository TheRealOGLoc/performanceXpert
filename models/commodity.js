const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commoditySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true
    },
    url: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    SKU: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        default: 5
    }, 
    brand: {
        type: String,
        required: true
    },
    part: {
        type: String,
        requried: true
    }
},  {
    timestamps: true
})

module.exports = mongoose.model("Commodity", commoditySchema)