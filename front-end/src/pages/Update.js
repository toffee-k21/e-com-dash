import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import {useNavigate } from 'react-router-dom'

const Update = () => {

const [ userProducts, setUserProducts ] = useState([])
const navigate = useNavigate()

  const fetchUserProducts = async(userId) =>{
let result = await fetch ( `http://localhost:5000/update/${userId}`)
result = await result.json();
setUserProducts(result)
console.log(result)
  }

useEffect(()=>{
  let userId = localStorage.getItem("user")
  userId = JSON.parse(userId)._id
fetchUserProducts(userId)
},[])


const handleDelete = async (id)=>{
console.log(id)
const DeleteFetch = await fetch("http://localhost:5000/update",{
  method:"delete",
  body:JSON.stringify({
    _id:id
  }),
  headers:{
    "Content-type":"application/json"
  }
})
const response = await DeleteFetch.json()
console.log(response)
let userId = localStorage.getItem("user")
userId = JSON.parse(userId)._id
fetchUserProducts(userId)
}

  return (
    <div className='m-11'>
    <h1 className='text-2xl font-semibold'>Products</h1>
    <div className='flex flex-wrap'>
        {userProducts.map((r)=>{return (<>
          
          <ProductCard details={r}/>
          <button className='bg-black text-white p-2 my-2 mr-2' onClick={()=>handleDelete(r._id)}>Delete</button>
           
          </>)})}
    </div>
</div>
  )
}

export default Update