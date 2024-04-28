import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Search from '../components/Search'
import { ProductContext } from '../utils/Context'

const Products = () => {

    const productContext = useContext(ProductContext)
    const {productList,setProductList} = productContext

    // const [productList,setProductList] = useState([])
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
        <h1 className='text-2xl font-semibold m-2'>Products</h1>
        <Search />
        <div className='flex flex-wrap shrink-0'>
            {productList.map((r)=><ProductCard details={r}/>)}
        </div>
    </div>
  )
}

export default Products
