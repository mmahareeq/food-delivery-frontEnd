import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addNewItem = createAsyncThunk('item/add', async (values, thunkAPI)=>{
    try { 
        const config =  {
            headers: {
                'content-type': 'multipart/form-data'
            },
            };
        const response = await axios.post('/products', values);
        return response.data; 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

export const getItemById = async(id)=>{
   try {
     const response = await axios.get(`/products/${id}`);
     return response.data;
   } catch (error) {
     return new Error(error);
   }
}

export const updateItem = async(id, data,)=>{
   try {
     const response = await axios.put(`/products/${id}`, data);
     return response.data;
   } catch (error) {
    return  new Error(error);
   }
}

export const getAllItem = createAsyncThunk('item/getAll', async ({start, count, search}, thunkAPI)=>{
  try {
    const response = await axios.get(`/products?start=${start}&count=${count}&search=${search}`);
    return response.data;
  } catch (error) {
     return thunkAPI.rejectWithValue(error.response.data);
  }
}) 

export const deleteItem = async(id)=>{
  console.log('id', id)
  try {
    const response= await axios.delete(`/products/${id}`);
    console.log(response)
    return response.data;
  } catch (error) {
    return new Error(error);
  }

}