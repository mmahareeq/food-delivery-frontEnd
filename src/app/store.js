import { configureStore } from "@reduxjs/toolkit";
import { isLogin } from "../features/users/userAction";
import userReducer from '../features/users/userSlice';
import cartReducer from '../features/cart/cartSlice';
import { Cart } from "../features/cart/cartAction";
import itemReducer from '../features/items/itemSlice';
import categoryReducer from '../features/categories/categorySlice';
export const store = configureStore({
    reducer: {
        users: userReducer,
        cart: cartReducer,
        item: itemReducer,
        categories: categoryReducer
    }
});

store.dispatch(isLogin())
store.dispatch(Cart())
