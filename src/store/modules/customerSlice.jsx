import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    customerData: [
        { id: 1, title: 'aaaa', user: 'user1', date: '2023-12-24' },
        { id: 2, title: 'bbbb', user: 'user2', date: '2023-12-24' },
        { id: 3, title: 'cccc', user: 'user3', date: '2023-12-24' },
        { id: 4, title: 'dddd', user: 'user4', date: '2023-12-24' },
    ],
    title: '',
    user: '',
    date: '',
};

let no = 5;

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        onAdd: (state, action) => {
            const getDate = () => {
                const today = new Date();
                const month = today.getMonth() + 1;
                const year = today.getFullYear();
                const date = today.getDate();
                return `${year}-${month}-${date}`;
            };
            state.customerData = [
                ...state.customerData,
                {
                    id: no++,
                    title: action.payload,
                    user: state.user,
                    date: getDate(),
                },
            ];

            state.date = getDate();

            localStorage.setItem('customerData', JSON.stringify(state.customerData));
        },

        changeTitle: (state, action) => {
            state.title = action.payload;
        },
        changeUser: (state, action) => {
            state.user = action.payload;
        },
        signUpDate: (state, action) => {
            const getDate = () => {
                const today = new Date();
                const month = today.getMonth() + 1;
                const year = today.getFullYear();
                const date = today.getDate();
                return `${year}-${month}-${date}`;
            };

            state.date = getDate();
        },
    },
});
export const { onAdd, onUpdate, changeTitle, changeUser, signUpDate } = customerSlice.actions;
export default customerSlice.reducer;
