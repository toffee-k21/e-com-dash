const express = require("express");

const app = express();

 app.use(express.json())//middleware for form data

module.exports = app.post("/register", (req,res )=>{
    console.log("hello")
    })