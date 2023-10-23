import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
// import {cart} from "react-redux"

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const total = cart.reduce ((p,c)=>{
return p+c.NewPrice;
  }, 0)

  // console.log(total)


  if (!cart || cart.length == 0) {
    return (
      <h1
        className="heading"
        style={{ marginTop: "200px", marginBottom: "160px" }}
      >
        No items in your <span>cart </span>...
      </h1>
    );
  }

  return (
    <>
      <div className="cart-container">
        <div className="cart-items">
          {cart.map((Item) => (
            <CartItem key={Item.id} Item={Item} />
          ))}
        </div>

        <div className="bill-section">
          <h1> 
            Total Amount : <br /> <br />${total.toFixed(2)}
          </h1>
          <button className="pay-btn">Pay Now</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
