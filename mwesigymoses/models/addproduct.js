const mongoose = require("mongoose")
const routee = require("../droutes/routes")

const addProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
})

module.exports = mongoose.model("AddProd", addProductSchema)