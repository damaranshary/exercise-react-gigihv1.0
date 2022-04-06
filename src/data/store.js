import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./redux/search-slice";
import dataSlice from "./redux/data-slice";
//import searchReducer from "./redux/search-reducer";

export default configureStore({
  reducer: {
    query: searchSlice,
    data: dataSlice
    //query: searchReducer
  }
  // devTools: true
});
