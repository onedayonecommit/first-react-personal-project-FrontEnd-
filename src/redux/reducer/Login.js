import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Login } from "../../page";

const getAT = createAsyncThunk("GET/AT", async (dispatch, getState) => {
    const result = await axios({
        method: "post",
        url: "http://localhost:8080/login",
        data: {
            user_id: "",
            user_pw: "",
        }
    })
    if (result.data) {
        dispatch(login((result.refreshtoken)))
    }
});

const LoginSlice = createSlice({
    name: "Login",
    initialState: [{ user_id: "", user_pw: "", at: "" }],
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = ""
        }
    }
})
export { getAT, LoginSlice }
export const { login, logout } = LoginSlice.actions