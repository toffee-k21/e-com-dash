const express = require("express");
require("./Db/connect")
const cors = require("cors")

// const postUrl = require("./Db/routes/user")
const User = require("./Db/models/user")

const app = express();
app.use(cors())
app.get("/",(req,res)=>{
    res.send("app is working")
})

// postUrl

app.use(express.json())//middleware for form data
app.post("/register", (req,res )=>{
    console.log(req.body)
    const insert = new User(req.body);
    insert.save();
    // res.send("Hogya send to database")
    // you can't use 2 res.send at a single req
    res.send({message:"this is from data base",...req.body})
    })


app.listen(5000)