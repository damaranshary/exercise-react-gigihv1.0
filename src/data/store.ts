import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./redux/search-slice";
import dataSlice from "./redux/data-slice";
//import searchReducer from "./redux/search-reducer";

export const store = configureStore({
  reducer: {
    query: searchSlice,
    data: dataSlice
    //query: searchReducer
  }
  // devTools: true
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
