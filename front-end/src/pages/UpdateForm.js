import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateFrom = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("electronics");
  const [prefill,setPrefill] = useState({})
  const navigate = useNavigate()


  const id = useParams().id

  let user = localStorage.getItem("user")
  user = JSON.parse(user)
  const handlePrefill = async ( )=>{
    const fetchPrefill = await fetch("http://localhost:5000/update/"+id, {
        method:"PUT",
        headers:{
            "Content-Type" : "applications/json"
        }
    })
    const data = await fetchPrefill.json();
    console.log(data)
    setPrefill(data)
    // console.log(prefill)
    // if (prefill != null){
    //     setName(prefill.productName);
    //     setPrice(prefill.price);
    //     setCompany(prefill.company);
    //     setCategory(prefill.category);
    // }
  }
  useEffect(()=>{
handlePrefill()
  },[])
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
    navigate("/update")
  };

  console.log(prefill)

  return (
    <div className="my-11 flex justify-center">
      <div className="w-1/2">
        <h1 className="text-2xl font-semibold">Update a product</h1>
        <div className="flex flex-col">
          <div>
            <label className="m-2 block">Enter product name</label>
            <input
              value={name == '' ? prefill.productName: name}
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
             value={price == '' ? prefill.price: price}
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
             value={company == '' ? prefill.company: company}
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
              value={category == '' ? prefill.category: category}
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