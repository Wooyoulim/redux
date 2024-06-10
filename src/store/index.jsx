import { configureStore } from '@reduxjs/toolkit';
import noticeR from './modules/noticeSlice';
import customerR from './modules/customerSlice';
import cartR from './modules/cartSlice';
import authR from './modules/authSlice';
import pagenationR from './modules/pagenationSlice';

export const store = configureStore({
    reducer: {
        noticeR,
        customerR,
        cartR,
        authR,
        pagenationR,
    },
});
