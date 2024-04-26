import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const Update = () => {

const [ userProducts, setUserProducts ] = useState([])

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

  return (
    <div className='m-11'>
    <h1 className='text-2xl font-semibold'>Products</h1>
    <div className='flex'>
        {userProducts.map((r)=><ProductCard details={r}/>)}
    </div>
</div>
  )
}

export default Update