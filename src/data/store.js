import { configureStore } from "@reduxjs/toolkit";
import searchDataReducer from "./redux/search-slice";
import dataSlice from "./redux/data-slice";
// import accountReducer from "./account-reducer";

export default configureStore({
  reducer: {
    search: searchDataReducer,
    data: dataSlice
  }
  // devTools: true
});
