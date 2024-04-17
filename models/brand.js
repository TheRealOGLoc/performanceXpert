const mongoose = require("mongoose")
const Schema = mongoose.Schema

const brandSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        requried: true
    },
    commodity: [{
        type: Schema.Types.ObjectId,
        ref: "Commodity"
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model("Brand", brandSchema)