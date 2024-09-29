const express = require("express");
require("./Db/connect");
const cors = require("cors");
// const postUrl = require("./Db/routes/user")
const User = require("./Db/models/user");
const Product = require("./Db/models/product");
const { Server } = require("socket.io");

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("app is working");
});
const io = new Server({
  cors: true,
});
io.on("connection", (socket) => {
  console.log("user connected");
  let dataIn;
  socket.on("Product-added", (data) => {
    console.log(data);
    dataIn = data;
    // socket.emit("new-product-arrive", data); //will this only emitted to that socket who emited Product-added ? yes
    socket.broadcast.emit("new-product-arrive", dataIn);
  });
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

app.get("/products", async (req, res) => {
  const data = await Product.find({});
  console.log(data);
  // res.send(JSON.parse(data))//we can send js objects
  res.send(data); //we can send objects
});

app.delete("/update", async (req, res) => {
  let deleteProduct = await Product.deleteOne({ _id: req.body._id }); //obj pass krna h
  res.send(deleteProduct);
});

app.get("/update/:id", async (req, res) => {
  const userId = req.params.id;
  let userProducts = await Product.find({ userId: userId });
  res.send(userProducts);
});

app.patch("/update/:id", async (req, res) => {
  const productId = req.params.id;
  // console.log(productId)
  // let findProduct = await Product.findOne({productId:productId})
  const updateList = await Product.findOneAndUpdate(
    { _id: productId },
    {
      productName: req.body.productName,
      price: req.body.price,
      company: req.body.company,
      category: req.body.category,
    },
    { new: true }
  );
  res.send(updateList);
  // console.log(updateList)
  // console.log(productId)
});
//put se kr de rha hoon kuki get busy hai ish route k liye
app.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const getPrefill = await Product.findOne({ _id: id });
  res.send(getPrefill);
});

app.get("/search/:key", async (req, res) => {
  const SearchProduct = await Product.find({
    $or: [
      { productName: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
    ],
  });
  // const SearchProduct = await Product.find({
  //   productName:{$regex:req.params.key},
  // })//it works but array pr nhi apply hoga n
  // note: regex is needed to match the perticular part of the key with db productName
  // "$or" is needed for applying logical operator on array given
  res.send(SearchProduct);
});

app.listen(5000);
io.listen(5001);
