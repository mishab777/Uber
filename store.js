import navReducer from "./slices/navSlice"
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        nav: navReducer,

    },
});