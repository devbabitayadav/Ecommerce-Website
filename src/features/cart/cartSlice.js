import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };
    },

    remove: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    },

    QtyUpdate: (state, action) => {

      // console.log(action.payload);
      return {
          ...state,
          cart: state.cart.map((item) => {
              if (item.id === action.payload.id) {
                  if ((item.qty + action.payload.num) >= 1 ) {
                      return { ...item, qty: item.qty + action.payload.num }
                  } else {
                      return item
                  }

              } else {
                  return item
              }
          })
          //    qty : item.qty + action.payload.num
      }
  },

  newPrice: (state, action) => {
    return {
        ...state,
        cart: state.cart.map((item) => {
            if (item.id === action.payload.id) {
                return { ...item, NewPrice: item.price * item.qty }
            } else {
                return item
            }
        })

    }
}


  },
  extraReducers: (builder) => {},
});

export const { add, remove, QtyUpdate, newPrice} = cartSlice.actions;

export default cartSlice.reducer;
