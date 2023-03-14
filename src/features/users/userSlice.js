import { createSlice } from '@reduxjs/toolkit';
import { signup, login, isLogin } from './userAction';

const initialState = {
    userinfo: {},
    loading: false,
    error: '',
    success: false,
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(signup.fulfilled, (state , action)=>{
           state.userinfo = action.payload;
           state.success= true;
           state.loading = false;
          
        })
        .addCase(signup.pending, (state , action)=>{
            state.error = null;
            state.loading = true;
            
        })
        .addCase(signup.rejected, (state , action)=>{
            state.error = action.error;
            state.loading = false;
          
        })
        .addCase(login.pending, (state , action)=>{
            state.error = null;
            state.loading = true;
            
        })
        .addCase(login.rejected, (state , action)=>{
            console.log(action)
            state.error = action.payload;
            state.loading = false;
            state.success = false;
          
        })
        .addCase(login.fulfilled, (state , action)=>{
            state.userinfo = action.payload;
            state.success= true;
            state.loading = false;
         })
        .addCase(isLogin.rejected, (state , action)=>{
            state.loading = false;
            state.success = false;
         
        })
        .addCase(isLogin.pending, (state, action)=>{
            state.error = null;
            state.loading = true;
        })
        .addCase(isLogin.fulfilled, (state, action)=>{
            state.userinfo = action.payload;
            state.success= true;
            state.loading = false;
        })
    }
});

export default userSlice.reducer;