import React, { useEffect, useState } from 'react'

const Products = () => {
  const [products,setProducts] =useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/products')
    .then((response)=>response.json())
    .then((data)=>setProducts(data));
  },[]);
  return (
    <div>
      <h2>Our Products</h2>
      <div>
        {products.map((product)=>(
          <div>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products