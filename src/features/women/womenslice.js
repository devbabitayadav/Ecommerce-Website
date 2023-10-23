import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState ={
    womens:[],
    isLoading:false,
    isError:false,
    isSuccess:false,

}
const womenslice = createSlice({
    name:"womens",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchwomen.pending, (state)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchwomen.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.womens=action.payload;
        });
        builder.addCase(fetchwomen.rejected, (state)=>{
            state.isLoading=false;
            state.isSuccess=false ;  
            state.isError=true;
            state.womens=null;
        });
    },
});


export default womenslice.reducer;

 export const fetchwomen = createAsyncThunk("FETCH_WOMEN", async()=>{
    const response = await fetch("https://fakestoreapi.com/products/category/women's%20clothing");
    const data = await response.json();
    return data;
});