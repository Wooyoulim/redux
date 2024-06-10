import { createSlice } from '@reduxjs/toolkit';
import productData from '../../assets/api/cartdata';

const initialState = {
    products: productData,
    carts: [],
    cartTotal: 0,
    isChk: false,
    amount: 1,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.carts.push(action.payload);
        },
        removeCart: (state, action) => {
            state.carts = state.carts.filter((item) => item.id !== action.payload);
        },
        totalCart: (state, action) => {
            state.cartTotal = state.carts.reduce((acc, curr) => acc + curr.price * state.amount, 0);
        },
        sortCart: (state, action) => {
            if (action.payload !== '') {
                state.products = [...state.products].sort((a, b) =>
                    a[action.payload] > b[action.payload] ? 1 : -1
                );
            }
        },
        searchCart: (state, action) => {
            state.products = productData.filter((product) =>
                product.description.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
        resetCart: (state, action) => {
            state.products = productData;
            state.carts = [];
        },
        allCart: (state, action) => {
            state.isChk = !state.isChk;
        },
    },
});
export const { addCart, removeCart, totalCart, sortCart, searchCart, resetCart, allCart } =
    cartSlice.actions;
export default cartSlice.reducer;
