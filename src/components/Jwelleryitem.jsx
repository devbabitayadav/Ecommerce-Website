import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {fetchjwellery} from "../features/jwellery/jwelleryslice";

const Jwelleryitem = () => {
  const dispatch = useDispatch();
  const { jwellerys, isLoading, isError, isSuccess } = useSelector(
    (state) => state.jwellery
  );

useEffect(()=>{
    dispatch(fetchjwellery())
},[])

//   useEffect(() => {
//     dispatch(fetchjwellery());
//   }, []);

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

        <div class="spinner-border m-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
//       <div className="text-center">
//      <div class="spinner-border" role="status">
//   <span class="visually-hidden">Loading...</span>
// </div>
//       </div>
    );
  }
if(isSuccess){
  return (
    <div className="container-fluid2 mt-4">
      <h2 className="pp fs-3 fw-bold">Top Jwelery Product</h2>
      <div className="container-fluid1">
      {jwellerys.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
    </div>
  );
}
 
};

export default Jwelleryitem;
