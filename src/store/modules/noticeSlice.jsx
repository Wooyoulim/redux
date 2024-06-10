import { createSlice } from '@reduxjs/toolkit';
import noticedata from '../../assets/api/noticedata';

const initialState = {
    noticedata: noticedata,
};

export const noticeSlice = createSlice({
    name: 'notice',
    initialState,
    reducers: {},
});

// export const {} = noticeSlice.actions;
export default noticeSlice.reducer;
