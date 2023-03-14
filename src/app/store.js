import { configureStore } from "@reduxjs/toolkit";
import { isLogin } from "../features/users/userAction";
import userReducer from '../features/users/userSlice';
import cartReducer from '../features/cart/cartSlice';
import { getCart } from "../features/cart/cartAction";
export const store = configureStore({
    reducer: {
        users: userReducer,
        cart: cartReducer,
    }
});

// store.dispatch(isLogin())
// store.dispatch(getCart())
