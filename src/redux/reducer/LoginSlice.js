import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "../../Cookies";
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
        logout: (state) => {
            console.log("Hi")
            window.localStorage.setItem("loginstatus", false)
            window.location.href = "/"
        }
    },
    extraReducers: (builder) => {
        builder.addCase(LoginFetch.pending, (state, action) => {
            state.loginStatus = "로그인 시도 중입니다. 잠시만 기다려주세요."
        })
        builder.addCase(LoginFetch.fulfilled, (state, action) => {
            console.log(action.payload)
            state.loginStatus = "성공."
            state.user_id = action.payload.user_email
            state.accesstoken = action.payload.AT
            state.loging = action.payload.status
            setCookie("MY AT", action.payload.AT, {
                path: "/",
                secure: true
            })
            window.localStorage.setItem("loginstatus", action.payload.status)
            window.location.href = "/"
        })
        builder.addCase(LoginFetch.rejected, (state, action) => {
            state.loginStatus = "로그인 시도 중입니다. 잠시만 기다려주세요."
        })
    }
})
export { LoginSlice }
export const { login, logout } = LoginSlice.actions