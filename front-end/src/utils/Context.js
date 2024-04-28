const { createContext, useState } = require("react");

export const ProductContext = createContext(null);//default value of store is null

export const ProductProvider = ({children} )=>{
    const [productList,setProductList] = useState([])
return <ProductContext.Provider value={{productList, setProductList}}>
    {children}
</ProductContext.Provider>
}