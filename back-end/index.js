const express = require("express");
require("./Db/connect")
const postUrl = require("./Db/routes/user")

const app = express();

app.get("/",(req,res)=>{
    res.send("app is working")
})

postUrl

app.listen(5000)