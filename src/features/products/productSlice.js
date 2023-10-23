import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], 
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state)=>{
      state.isLoading = true
    })
    builder.addCase(fetchProducts.fulfilled , (state , action)=>{
      state.isLoading= false
      state.isSuccess = true
      state.products = action.payload
    })
    builder.addCase(fetchProducts.rejected , state=>{
      state.isLoading = false
      state.isSuccess = false
        state.isError = true
        state.products = null
      
    })
  },
});

export default productSlice.reducer;

export const fetchProducts = createAsyncThunk( "FETCH_PRODUCTS" , async()=>{
  const response = await fetch (`https://fakestoreapi.com/products`)
  const data = await  response.json()
  return data;
})
