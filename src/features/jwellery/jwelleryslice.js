import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState ={
    jwellerys:[],
    isLoading:false,
    isError:false,
    isSuccess:false,

}

const jwelleryslice = createSlice({
    name:"jwellerys",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchjwellery.pending, (state)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchjwellery.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.jwellerys=action.payload;
        });
        builder.addCase(fetchjwellery.rejected, (state)=>{
            state.isLoading=false;
            state.isSuccess=false ;  
            state.isError=true;
            state.jwellerys=null;
        });
    },
});

export default jwelleryslice.reducer;

 export const fetchjwellery = createAsyncThunk("FETCH_JWELLERY", async()=>{
    const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
    const data = await response.json();
    return data;
});