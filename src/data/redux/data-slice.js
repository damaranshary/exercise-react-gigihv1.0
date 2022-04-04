import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "getData",
    initialState: {
        value: []
    },
    reducers: {
        getData: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { getData } = dataSlice.actions;

export default dataSlice.reducer;