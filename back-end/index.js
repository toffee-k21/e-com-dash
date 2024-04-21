const express = require("express");
require("./Db/connect")
// const postUrl = require("./Db/routes/user")

const app = express();

app.get("/",(req,res)=>{
    res.send("app is working")
})

// postUrl

app.use(express.json())//middleware for form data
app.post("/register", (req,res )=>{
    console.log(req.body)
    res.send(req.body)
    })


app.listen(5000)