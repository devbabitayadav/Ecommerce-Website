import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { QtyUpdate, newPrice, remove} from "../features/cart/cartSlice";
import { toast } from "react-toastify";


const CartItem = ({ Item }) => {

  // const { cart } = useSelector(state => state.cart)

  const dispatch = useDispatch();

  // const { count } = CartItem;

  const handleRemove = (id) => {
    dispatch(remove(id));
    toast.error("Item Removed" ,{
      position: "bottom-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };
  const [Qty, setQty] = useState(1)

  const handlezero = () => {
    if (Qty <= 1) {
      setQty(1)
    }


  }
  // const [updateprice, setupdateprice] = useState()
  const PriceUpdate = ((id, num) => {
 
    const newPayload = {
      id,
      num
    }
    dispatch(QtyUpdate(newPayload))

    dispatch(newPrice(newPayload))
    
    
  })

  useEffect(() => {
    handlezero()
    // PriceUpdate()

  }, [Qty])



  return (
    <div className="cart-item">
      <img src={Item.image} alt="" />
      <span>
        <h1>{Item.title}</h1>
        <h3>Rate : ${Item.NewPrice ?Item.NewPrice : Item.price }</h3>

        <h3>Qty :<strong onClick={() => PriceUpdate(Item.id, - 1)}>-</strong> {Item.qty}
            <strong onClick={() => PriceUpdate(Item.id, + 1)}>+</strong></h3>
      </span>
      <button className="remove-btn" onClick={() => handleRemove(Item.id)}>
        Remove Item <i class="fa fa-star-half-o" aria-hidden="true"></i>

      </button>
    </div>
  );
};

export default CartItem;
