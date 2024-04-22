const mongoose = require("mongoose")
const Schema = mongoose.Schema

const OrderItemSchema = new Schema({
    creater: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    itemId: {
        type: mongoose.Types.ObjectId,
        ref: "Commodity",
        required: true
    }, 
    quantity: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

module.exports=mongoose.model("OrderItem", OrderItemSchema)