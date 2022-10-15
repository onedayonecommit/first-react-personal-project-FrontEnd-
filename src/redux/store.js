import { configureStore } from "@reduxjs/toolkit";
import { getAT, LoginSlice } from "./reducer/Login";
import { SignupSlice } from "./reducer/Signup";

const Store = configureStore({
    reducer: {
        // loginAT: LoginSlice.actions,
        // signUp: SignupSlice.actions
    }
})

export default Store