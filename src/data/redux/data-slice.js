import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        value: []
    },
    reducers: {
        data: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { data } = dataSlice.actions;

export default dataSlice.reducer;