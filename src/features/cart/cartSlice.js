import { createSlice } from '@reduxjs/toolkit';
import { getCart, addToCart } from './cartAction';

const initialState = {
    cart: [],
    count: 0,
    loading: false,
    error: '',
    success: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(getCart.fulfilled, (state , action)=>{
            state.cart = action.payload;
            state.loading = false;
            state.error = false;
            state.success = true;
        })
        .addCase(addToCart.pending, (state , action)=>{
            state.loading = true;
            state.error = false;
            state.success = false;
        })
        .addCase(addToCart.fulfilled, (state , action)=>{
            console.log(action)
            state.cart = action.payload.cart;
            state.count = action.payload.count;
            state.loading = false;
            state.error = false;
            state.success = true;
        })
        
    }
        
});


export default cartSlice.reducer;