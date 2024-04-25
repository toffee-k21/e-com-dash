import React from 'react'

const ProductCard = ({details}) => {
    console.log(details)
    const {productName,price,company,category} = details
  return (
    <div className='border-[1px] w-1/4 h-[120px] m-2 p-2'>
        <h1 className='text-lg font-semibold'>{productName}</h1>
        <h1>Brand: {company}</h1>
        <div>Price: ${price}</div>
        <div>Category: {category}</div>
    </div>
  )
}

export default ProductCard