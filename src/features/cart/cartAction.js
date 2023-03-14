import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const getCart = createAsyncThunk('cart/getCart', async(thunkAPI) =>{
    try {
        const response = await axios.get('/cart');
        return response.data.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const addToCart = createAsyncThunk('cart/add', async(data, thunkAPI)=>{
    try {
        const response = await axios.post('/cart', data);

        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const deleteItemFromCart = createAsyncThunk('cart/delete', async(data, thunkAPI)=>{
    try {
        
        const response = await axios.delete('/cart', data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
