import { configureStore } from "@reduxjs/toolkit";
import conterSlice from "../store/reducers/counterSlice"

export const store =  configureStore({
    reducer:{
        conter:conterSlice,
    },
});