import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState ={
    electronics:[],
    isLoading:false,
    isError:false,
    isSuccess:false,

}
const electronicslice = createSlice({
    name:"electronics",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchelectric.pending, (state)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchelectric.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.electronics=action.payload;
        });
        builder.addCase(fetchelectric.rejected, (state)=>{
            state.isLoading=false;
            state.isSuccess=false ;  
            state.isError=true;
            state.electronics=null;
        });
    },
});


export default electronicslice.reducer;

 export const fetchelectric = createAsyncThunk("FETCH_ELECTRIC", async()=>{
    const response = await fetch('https://fakestoreapi.com/products/category/electronics');
    const data = await response.json();
    // console.log(data);
    return data;
});