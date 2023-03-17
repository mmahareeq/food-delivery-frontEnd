import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addNewItem = createAsyncThunk('item/add', async (values, thunkAPI)=>{
    try { 
        const config =  {
            headers: {
                'content-type': 'multipart/form-data'
            },
            };
        const response = await axios.post('/product', values);
        return response.data; 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

export const getItemById = async(id)=>{
   try {
     const response = await axios.get(`/product/${id}`);
     return response.data;
   } catch (error) {
     return new Error(error);
   }
}

export const updateItem = async(id, data, thunkAPI)=>{
   try {
     const response = await axios.put(`/product/${id}`, data);
     return response.data;
   } catch (error) {
    return  thunkAPI.rejectWithValue(error.response.data);
   }
}