import { createSlice } from '@reduxjs/toolkit';
import { getCart } from './cartAction';

const initialState = {
    cart: {},
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
        })}
});

console.log(initialState);

export default cartSlice.reducer;