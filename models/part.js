const mongoose = require("mongoose")
const Schema = mongoose.Schema

const partSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    commodity: [{
        type: Schema.Types.ObjectId,
        ref: "Commodity"
    }]
},  {
    timestamps: true
})

module.exports = mongoose.model("Part", partSchema)