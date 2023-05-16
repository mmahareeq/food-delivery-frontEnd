import { createSlice } from '@reduxjs/toolkit';
import { Cart, addToCart , deleteItemFromCart} from './cartAction';

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
        builder.addCase(Cart.fulfilled, (state , action)=>{
            state.cart = action.payload;
            state.loading = false;
            state.error = false;
            state.success = true;
        })
        .addCase(Cart.pending, (state , action)=>{
            state.loading = true;
            state.error = false;
            state.success = false;
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
        .addCase(deleteItemFromCart.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = false;
            state.success = true;
        })
        .addCase(deleteItemFromCart.rejected, (state, action)=>{
            state.loading = false;
            state.error = true;
            state.success = false;
        })
        
    }
        
});


export default cartSlice.reducer;