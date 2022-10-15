import axios from "axios";

const { createSlice } = require("@reduxjs/toolkit");

const SignupSlice = createSlice({
    name: "signup",
    initialState: {
        user_id: "",
        user_pw: "",
    },
    reducers: {
        signup: (state, action) => {
            state = action.payload
        }
    },
})

export { SignupSlice }
export const { signup } = SignupSlice.actions