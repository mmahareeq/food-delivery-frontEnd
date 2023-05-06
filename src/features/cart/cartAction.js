import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const getCart = createAsyncThunk('cart/getCart', async(thunkAPI) =>{
    try {
        const response = await axios.get('/carts/');
        return response.data.cart;

    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const addToCart = createAsyncThunk('cart/addToCart', async(data, thunkAPI)=>{
    try {
        const response = await axios.put('/carts/', data);

        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const deleteItemFromCart = createAsyncThunk('cart/delete', async(data, thunkAPI)=>{
    try {
        
        const response = await axios.delete('/carts/', data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
