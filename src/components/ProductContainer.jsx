import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";

const ProductContainer = () => {
  const dispatch = useDispatch()
  
  
  const { products, isLoading , isError , issuccess} = useSelector((state) => state.products);


useEffect(()=>{
dispatch(fetchProducts())
}, [])



if(isError){
  return (
    <div className="container">
      <h1 className="all-products-title">SOMETHING WENT WRONG</h1>
       </div>
  );
}
if(isLoading){
  return (
    <div className="container">
      <h1 className="all-products-title">Loadings....</h1>
    
    </div>
  );
}

// yadi products bhi true hain or isscuess bhi true h to return products
  // if(products || issuccess){
    return (
      <div className="container-fluid2 ltp">
        <h1 className="all-products-title">All Products</h1>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  // }
 
};

export default ProductContainer;
