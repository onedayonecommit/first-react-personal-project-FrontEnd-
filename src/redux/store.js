import { configureStore } from "@reduxjs/toolkit";
import AgeSlice from "./reducer/Age";
import CounterSlice from "./reducer/Login";

const Store = configureStore({
    reducer: {
        counter: CounterSlice.reducer,
        age: AgeSlice.reducer
    }
})

export default Store