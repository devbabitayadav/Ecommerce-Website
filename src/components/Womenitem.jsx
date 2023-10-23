import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchwomen } from "../features/women/womenslice";
import ProductCard from "./ProductCard";

const Womenitem = () => {
  const dispatch = useDispatch();
  const { womens, isLoading, isError, isSuccess } = useSelector(
    (state) => state.womens
  );

  useEffect(() => {
    dispatch(fetchwomen());
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
          <h2 className="pp fs-3 fw-bold">Top Womens Product</h2>
          <div className="container-fluid1 d-flex justify-content-between flex-wrap">
          {womens.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          </div>
        </div>
      );
  }

};

export default Womenitem;
