import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        value: {
            search: [],
            trending: [],
            nothing: []
        },
    },
    reducers: {
        searchData: (state, action) => {
            state.value.search = action.payload;
        },
        trendingData: (state, action) => {
            state.value.trending = action.payload;
        }
    }
})

export const { searchData, trendingData } = dataSlice.actions;

export default dataSlice.reducer;