const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AddressSchema = new Schema({
    creater: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String
    },
    postCode: {
        type: Number,
        required: true
    },
    suburb: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports=mongoose.model("Address", AddressSchema)