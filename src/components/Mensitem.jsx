import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchmen } from "../features/men's/menslice";

const Mensitem = () => {
  const dispatch = useDispatch();

  const { mens, isError, isLoading, isSuccess } = useSelector (
    (state)=> state.mens
  )
  
  useEffect(() => {
    dispatch(fetchmen());
  }, []);

  if (isError) {
    return (
      <div>
        <h2 className="fs-3 fw-bold">
          Page not found. Something went wrong...
        </h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
if(isSuccess){
  return (
    <div className="container-fluid2 mt-4">
      <h2 className="pp fs-3 fw-bold">Top Men's Product</h2>
      <div className="container-fluid2 d-flex justify-content-between m2">
      {mens.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
    </div>
  );
}
  
};

export default Mensitem;
