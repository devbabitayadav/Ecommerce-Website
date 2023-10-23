import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/cart/cartSlice";
import Cart from "../pages/Cart";

// import CartItem from "./CartItem";
// import { toast } from "react-toastify";


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { cart } = useSelector(state => state.cart)


  const handleAdd = (product) => {
    let x= cart.filter(item=>item.id==product.id)
    if(x.length){
      alert("item is already in cart")
    }
    else{
      const cartProduct = {...product,qty:1 , NewPrice:product.price}
      dispatch(add(cartProduct));
    
    }

  };


  return (
    <div className="product">
      <img src={product.image} alt="" />
      <h1>{product.title} </h1>
         <span>
        <h3>Price : {product.price}</h3>
        <button className="add_cart" onClick={() => handleAdd(product)}>
          Add to cart
        </button>
        </span>
        </div>
  );
};

export default ProductCard;
