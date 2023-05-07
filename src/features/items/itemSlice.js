import { createSlice } from '@reduxjs/toolkit';
import { addNewItem, getAllItem } from './ItemAction';

const initialState = {
    items: [],
    count: 0,
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
           state.items = [...state.items, action.payload.product];
           state.success= true;
           state.loading = false;
          
        })
        .addCase(addNewItem.pending, (state , action)=>{
            state.error = null;
            state.loading = true;
        })
        .addCase(getAllItem.fulfilled, (state, action)=>
        {   
            state.items = [...action.payload[0].products];
            state.count = action.payload[0].count[0]?.total || 0;
            state.success= true;
            state.error = false;
            state.loading = false;
        })
        .addCase(getAllItem.pending, (state, action)=>{
            state.loading = true;
            state.success = false;
        })
    }
})


export default itemSlice.reducer;