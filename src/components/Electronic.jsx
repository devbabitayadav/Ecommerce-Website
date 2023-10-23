import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchelectric } from "../features/electronic/electronicsslice";


const Electronic = () => {
  const dispatch = useDispatch();

  const { electronics, isLoading, isError , isSuccess } = useSelector(
    (state) => state.electronics
  );

  useEffect(() => {
    dispatch(fetchelectric());
   
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
          <h2 className="pp fs-3 fw-bold">Electronic products </h2>
          <div className="container-fluid1 d-flex justify-content-center">
          {electronics.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          </div>
        </div>
      );
}
 
};

export default Electronic;
