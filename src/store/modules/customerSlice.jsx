import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    customerData: [
        { id: 1, title: 'aaaa', user: 'user1', date: '2023-12-24' },
        { id: 2, title: 'bbbb', user: 'user2', date: '2023-12-24' },
        { id: 3, title: 'cccc', user: 'user3', date: '2023-12-24' },
        { id: 4, title: 'dddd', user: 'user4', date: '2023-12-24' },
    ],
    current: null,
    customerAdd: [
        {
            title: '',
            name: '',
            date: '',
        },
    ],
};

let no = 6;

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        onAdd: (state, action) => {
            state.customerData = [
                ...state.customerData,
                { id: no++, text: action.payload, isChk: false },
            ];
            localStorage.setItem('customerData', JSON.stringify(state.customerData));
        },
        onDel: (state, action) => {
            state.customerData = state.customerData.filter((item) => item.id !== action.payload);
        },

        onEdit: (state, action) => {
            state.current = action.payload;
            localStorage.setItem('customerData', JSON.stringify(state.noticeData));
        },
        onUpdate: (state, action) => {
            state.current = action.payload;

            const newItem = state.customerData.find((item) => item.id === action.payload.id);
            if (newItem) {
                newItem.text = action.payload.text;
            }
            localStorage.setItem('customerData', JSON.stringify(state.noticeData));
        },
        changeInput: (state, action) => {
            state.customerAdd.title = action.payload;
            state.customerAdd.name = action.payload;
        },
    },
});
export const { onAdd, onDel, onEdit, onUpdate, changeInput } = customerSlice.actions;
export default customerSlice.reducer;
