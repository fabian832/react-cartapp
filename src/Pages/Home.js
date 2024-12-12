import React, { useEffect, useState } from 'react'
import { getProductList } from '../Api/ProductApi'
import ProductWrapper from '../Components/ProductWrapper'
import Navbar from '../Components/Navbar'

const Home = () => {
    const [productList, setProductList] = useState([])
  
    useEffect(() => {
      getProductList().then((result) => {
        setProductList(result.data.data)
      })
    }, [])
  
    const DisplayProduct = () => {
      return productList.map((product, i) => {
        return (
          <ProductWrapper key={i} product={product} />
        ) 
      })
    }
    
    return (
        <div className="product-container">
            <DisplayProduct />
        </div>
    )
}

export default Home