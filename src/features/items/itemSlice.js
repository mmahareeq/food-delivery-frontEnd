import { createSlice } from '@reduxjs/toolkit';
import { addNewItem } from './ItemAction';

const initialState = {
    items: [],
    loading: false,
    error: '',
    success: false,
};

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(addNewItem.fulfilled, (state , action)=>{
           state.items = action.payload;
           state.success= true;
           state.loading = false;
          
        })
        .addCase(addNewItem.pending, (state , action)=>{
            state.error = null;
            state.loading = true;
        })
    }
})

export default itemSlice.reducer;