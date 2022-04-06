import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "query",
  initialState: {
    value: ""
  },
  reducers: {
    query: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { query } = searchSlice.actions;

export default searchSlice.reducer;
