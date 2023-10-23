import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState ={
    mens:[],
    isLoading:false,
    isError:false,
    isSuccess:false,

}
const menslice = createSlice({
    name:"mens",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchmen.pending, (state)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchmen.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.mens=action.payload;
        });
        builder.addCase(fetchmen.rejected, (state)=>{
            state.isLoading=false;
            state.isSuccess=false ;  
            state.isError=true;
            state.mens=null;
        });
    },
});


export default menslice.reducer;

 export const fetchmen = createAsyncThunk("FETCH_MENS", async()=>{
    const response = await fetch('https://fakestoreapi.com/products/category/men\'s%20clothing');
    const data = await response.json();
    return data;
});