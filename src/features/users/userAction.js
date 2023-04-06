import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const signup = createAsyncThunk('users/signup', async ({ username, email, password, confirmPassword }, thunkAPI) => {
  try {
    const response = await axios.post('/session/signup',
      { username, email, password, confirmPassword },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      });

    return response.data;
  } catch (error) {
    return  thunkAPI.rejectWithValue(error.response.data);
  }
});


export const login = createAsyncThunk('users/login', async ({  password, email, },thunkAPI) => {
  try {
    const response = await axios.post('/session/login',
      { password,email  },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    return response.data;
  } catch (err) {
      console.log(err)
      if(!err.response.data){
        return err
      }
      return  thunkAPI.rejectWithValue(err.response.data);
  }
});

export const isLogin = createAsyncThunk('users/session', async (thunkAPI)=> {
  try {
    const response = await axios.get('/session/');
    console.log(response)
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const forgetPassword = async(data)=>{
  try {
    const response = await axios.post('/password/forgetpassword', data);
    console.log(response);
    return response.data;
  } catch (error) {
    return new Error(error);
  }
}

// thunkApi : an object containing all of the parameters that are normally passed to a Redux thunk function