import { configureStore } from "@reduxjs/toolkit";
import { isLogin } from "../features/users/userAction";
import userReducer from '../features/users/userSlice';
import cartReducer from '../features/cart/cartSlice';
import { getCart } from "../features/cart/cartAction";
import itemReducer from '../features/items/itemSlice';

export const store = configureStore({
    reducer: {
        users: userReducer,
        cart: cartReducer,
        item: itemReducer
    }
});

store.dispatch(isLogin())
store.dispatch(getCart())
