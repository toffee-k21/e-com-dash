import React, { useState } from "react";

const Add = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("electronics");


  let user = localStorage.getItem("user")
  user = JSON.parse(user)
  // console.log(user)
  const handleAdd = async () => {
    // console.log(name, company, category, price , user._id);
    const addproduct = await fetch("http://localhost:5000/add-product",{
      method:"post",
      body:JSON.stringify({
        productName:name,
        price:price,
        category:category,
        company:company,
        userId:user._id
      }),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    const data = await addproduct.json()
    console.log(data)
  };


  return (
    <div className="my-11 flex justify-center">
      <div className="w-1/2">
        <h1 className="text-2xl font-semibold">Add a product</h1>
        <div className="flex flex-col">
          <div>
            <label className="m-2 block">Enter product name</label>
            <input
              value={name}
              className="m-2 border-[1px] w-full p-[6px]"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="ex: I Phone 15 pro"
            />
          </div>
          <div>
            <label className="m-2 block">Enter product price</label>
            <input
              className="m-2 border-[1px] w-full p-[6px]"
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              placeholder="ex: 1400"
            />
          </div>
          <div>
            <label className="m-2 block">Enter Company</label>
            <input
              className="m-2 border-[1px] w-full p-[6px]"
              onChange={(e) => setCompany(e.target.value)}
              type="text"
              placeholder="ex: Apple"
            />
          </div>
          <div>
            <label className="m-2 block">Select category</label>
            <select
              className=" bg-black text-white m-2 p-[6px]"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="electronics">Electronics</option>
              <option value="book">Book</option>
              <option value="cloth">Clothing</option>
            </select>
          </div>
          <button
            className="bg-black text-white p-2 rounded-md m-2"
            onClick={handleAdd}
          >
            Add to store
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
