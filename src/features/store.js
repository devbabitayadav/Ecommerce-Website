import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import productReducer from "./products/productSlice";
import electronicReducer from "./electronic/electronicsslice"
import jwelleryReducer from "./jwellery/jwelleryslice"
import menReducer from "./men's/menslice"
import womenReducer from "./women/womenslice"


const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    electronics:electronicReducer,
    jwellery: jwelleryReducer,
    mens: menReducer,
    womens: womenReducer,

    
  },
});

export default store;
