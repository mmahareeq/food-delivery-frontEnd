import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllCategories = createAsyncThunk('categories/getAll', async ( thunkAPI) => {
    try {
      const response = await axios.get('https://food-delivery-99a8.onrender.com/categories',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  });
  
