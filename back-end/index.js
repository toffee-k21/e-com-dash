const express = require("express");
require("./Db/connect");
const cors = require("cors");
// const postUrl = require("./Db/routes/user")
const User = require("./Db/models/user");
const Product = require("./Db/models/product");

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("app is working");
});

// postUrl

app.use(express.json()); //middleware for form data
app.post("/register", async (req, res) => {
  console.log(req.body);
  const insert = new User(req.body);
  let result = await insert.save();
  // res.send("Hogya send to database")
  // you can't use 2 res.send at a single req
  // res.send({message:"this is from data base",...req.body})
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    const result = await User.findOne(req.body).select("-password"); //this .select is used for removing password from that json string. && it is applicable for findOne.
    // note
    // diff bw find(returns : array of objects toh agr kuch nhi milega toh [] ye return krega) and findOne(returns one objects .ie document in mongoDb)
    if (result) {
      res.send(result);
    } else {
      res.send({ result: "user not found" });
    }
  } else {
    res.send({ result: "Invalid credentials" });
  }
});

app.post("/add-product", async (req, res) => {
    const add = new Product(req.body);
    let result = await add.save();
  res.send(req.body);
});

app.get("/products", async(req,res) =>{
  const data = await Product.find({})
  console.log(data)
  res.send(data)
})

app.listen(5000);
