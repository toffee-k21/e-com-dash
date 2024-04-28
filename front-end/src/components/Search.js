import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'

const Search = () => {
const [search,setSearch] = useState("")
const [err,setErr] = useState(false)
// const [searchProductList,setsearchProductList] = useState([])
const productContext = useContext(ProductContext)
const {productList,setProductList} = productContext

const FetchSearchResult = async (s) =>{
if(search){
  const result = await fetch("http://localhost:5000/search/"+s)
  const data = await result.json();
  console.log(data);
//   setsearchProductList(data)
setProductList(data)
  setErr(false)
} else{setErr(true)}
}
  return (
    <>
    <div>
        <input value={search} className='p-1 border-[2px] m-2 w-1/3' 
        onChange={(e)=>setSearch(e.target.value)} placeholder='Search Products'/>
        <button onClick={()=>FetchSearchResult(search)}>Search</button>
    </div>
    {err && <div>you don't have search input</div> }
    </>
  )
}

// export const searchResult = searchProductList
export default Search