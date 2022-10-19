import { createSlice } from "@reduxjs/toolkit";
import { LoginFetch } from "../middlewares/Loginfetch";
// import axios from "axios";

// const getAT = createAsyncThunk("GET/AT", async (dispatch, getState) => {
//     const result = await axios({
//         method: "post",
//         url: "http://localhost:8080/login",
//         data: {
//             user_id: "",
//             user_pw: "",
//         }
//     })
//     if (result.data) {
//         dispatch(login((result.refreshtoken)))
//     }
// });

const LoginSlice = createSlice({
    name: "Login",
    initialState: { user_id: "", user_pw: "", accesstoken: "", loginStatus: "", loging: false },
    reducers: {
        login: (state, action) => {
            state.user_id = action.payload
            state.user_pw = action.payload
            state.accesstoken = action.payload
        },
        logout: (state) => {
            state = { user_id: "", user_pw: "", at: "" }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(LoginFetch.pending, (state, action) => {
            state.loginStatus = "로그인 시도 중입니다. 잠시만 기다려주세요."
        })
        builder.addCase(LoginFetch.fulfilled, (state, action) => {
            state.loginStatus = "성공."
            state.user_id = action.payload.payload.id
            state.accesstoken = action.payload.payload.AT
            state.loging = action.payload.payload.status
        })
        builder.addCase(LoginFetch.rejected, (state, action) => {
            state.loginStatus = "로그인 시도 중입니다. 잠시만 기다려주세요."
        })
    }
})
export { LoginSlice }
export const { login, logout } = LoginSlice.actions