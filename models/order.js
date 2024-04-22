const mongoose = require("mongoose")
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    creater: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    price: {
        type: Number,
        requried: true
    },
    address: {
        type: mongoose.Types.ObjectId,
        ref: "Address",
        required: true
    },
    userInfo: {
        type: mongoose.Types.ObjectId,
        ref: "UserInfo",
        required: true
    },
    items: [{
        type: mongoose.Types.ObjectId,
        ref: "OrderItem",
    }],
    status: {
        type: String,
        default: "Paid"
    }
}, {
    timestamps: true
})

module.exports=mongoose.model("Order", OrderSchema)