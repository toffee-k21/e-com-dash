const express = require("express");
const mongoose = require("mongoose")

const app = express();
const connectDb = ()=>{
    mongoose.connect("mongodb://localhost:27017/urlShortner")
const urlSchema = new mongoose.Schema({})
const Url = mongoose.model("url",urlSchema)
return Url
}
// const entry = connectDb() 
const fetchData = async(Url) =>{
const data = await Url.find({})
console.log(data)
}

fetchData(connectDb())

app.get("/",(req,res)=>{
    res.send("app is working")
})

app.listen(5001)