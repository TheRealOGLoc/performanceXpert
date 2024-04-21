const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PromotionSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    percentage: {
        type: Number,
        required: true
    }, 
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Promotions", PromotionSchema)