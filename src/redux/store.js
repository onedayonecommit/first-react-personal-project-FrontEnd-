import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./reducer/Login";

const Store = configureStore({
    reducer: {
        counter: CounterSlice.reducer
    }
})

export default Store