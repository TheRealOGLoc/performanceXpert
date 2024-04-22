const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserInfoSchema = new Schema({
    creater: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    }   
}, {
    timestamps:  true
})

module.exports = mongoose.model("UserInfo", UserInfoSchema)