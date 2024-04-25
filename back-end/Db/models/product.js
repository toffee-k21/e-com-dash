const mongoose = require("mongoose");

const productScema = mongoose.Schema({
    productName:String,
    price:String,
    userId:String,
    category:String,
    company:String
})

const Product = mongoose.model("products",productScema);

module.exports = Product