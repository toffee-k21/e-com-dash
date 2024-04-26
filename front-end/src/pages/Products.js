import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const Products = () => {

    const [productList,setProductList] = useState([])
    const handleFetchProducts = async( )=>{
        const fetchProduct = await fetch("http://localhost:5000/products");
    const data = await fetchProduct.json();
    // console.log(data);
    setProductList(data);
    }

    useEffect(()=>{
        handleFetchProducts()
    },[])

  return (
    <div className='m-11'>
        <h1 className='text-2xl font-semibold'>Products</h1>
        <div className='flex flex-wrap shrink-0'>
            {productList.map((r)=><ProductCard details={r}/>)}
        </div>
    </div>
  )
}

export default Products
