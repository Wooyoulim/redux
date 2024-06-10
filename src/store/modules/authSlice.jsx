import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataList: localStorage.getItem('dataList')
        ? JSON.parse(localStorage.getItem('dataList'))
        : [
              {
                  id: 1,
                  name: '홍길동',
                  email: 'abc@naver.com',
                  password: 'a1234',
              },
          ],
    user: null,
    authed: false,
};

let no = initialState.dataList.length + 1;

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
            const newItem = state.dataList.find((item) => item.email === email);

            if (newItem && newItem.password === password) {
                state.user = newItem;
                state.authed = true;
            }
        },
        logout: (state, action) => {
            state.user = null;
            state.authed = false;
        },
        signup: (state, action) => {
            state.dataList = [...state.dataList, { id: no++, ...action.payload }];
            localStorage.setItem('dataList', JSON.stringify(state.dataList));
        },
    },
});

export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;
