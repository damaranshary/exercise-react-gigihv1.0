import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "query",
  initialState: {
    value: ""
  },
  reducers: {
    search: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { search } = searchSlice.actions;

export default searchSlice.reducer;
