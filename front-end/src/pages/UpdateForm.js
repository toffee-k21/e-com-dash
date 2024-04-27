import React, { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateFrom = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("electronics");


  const id = useParams().id
  console.log("paramas",id)
  console.log("http://localhost:5000/update/"+id)

  let user = localStorage.getItem("user")
  user = JSON.parse(user)
  // console.log(user)
  const handleUpdate = async () => {
    // console.log(name, company, category, price , user._id);
    const updateProduct = await fetch("http://localhost:5000/update/"+id,{
      method:"PATCH",
      body:JSON.stringify({
        productName:name,
        price:price,
        category:category,
        company:company,
      }),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    const data = await updateProduct.json()
    console.log(data)
  };


  return (
    <div className="my-11 flex justify-center">
      <div className="w-1/2">
        <h1 className="text-2xl font-semibold">Update a product</h1>
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
            {/* <span className="text-red-500 mx-2">Enter a valid product name </span> */}
          </div>
          <div>
            <label className="m-2 block">Enter product price</label>
            <input
              className="m-2 border-[1px] w-full p-[6px]"
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              placeholder="ex: 1400"
            />
            {/* {err && !price && <span className="text-red-500 mx-2">Enter a valid product price </span>} */}
          </div>
          <div>
            <label className="m-2 block">Enter Company</label>
            <input
              className="m-2 border-[1px] w-full p-[6px]"
              onChange={(e) => setCompany(e.target.value)}
              type="text"
              placeholder="ex: Apple"
            />
            {/* {err && !company && <span className="text-red-500 mx-2">Enter a valid product company </span>} */}
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
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateFrom;