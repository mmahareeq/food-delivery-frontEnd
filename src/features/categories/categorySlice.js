import { createSlice } from '@reduxjs/toolkit';
import { getAllCategories } from './categoryAction'

const initialState = {
    categories: [{name: 'All'}],
    loading: false,
    error: '',
    success: false,
};

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(getAllCategories.fulfilled, (state , action)=>{
           state.categories =[ ...action.payload];
           state.categories.splice(0,0,{name: 'All'})
           state.success= true;
           state.loading = false;
          
        })
        .addCase(getAllCategories.pending, (state , action)=>{
            state.error = null;
            state.loading = true;
            
        })
        .addCase(getAllCategories.rejected, (state , action)=>{
            state.error = action.error;
            state.loading = false;
          
        })
       
    }
});

export default categorySlice.reducer;
