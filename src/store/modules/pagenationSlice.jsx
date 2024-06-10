import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pageData: [],
    currPage: 1,
    totalPage: 1,
    postPerPage: 10,
};

export const pagenationSlice = createSlice({
    name: 'pagenation',
    initialState,
    reducers: {
        prevPage: (state, action) => {
            if (state.currPage === 1) {
                state.currPage = 1;
            } else {
                state.currPage--;
            }
        },
        lastPage: (state, action) => {
            if (state.currPage === state.totalPage) {
                state.currPage = state.totalPage;
            } else {
                state.currPage++;
            }
        },
        currentPage: (state, action) => {
            state.currPage = action.payload;
        },
        addData: (state, action) => {
            state.pageData = action.payload;
        },
        totalData: (state, action) => {
            state.currPage = 1;
            state.totalPage = Math.ceil(state.pageData.length / state.postPerPage);
        },
    },
});
export const { prevPage, lastPage, currentPage, addData, totalData } = pagenationSlice.actions;
export default pagenationSlice.reducer;
