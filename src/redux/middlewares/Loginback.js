import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login } from "../reducer/Login";

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

const LoginFetch = createAsyncThunk("LoginSlice/LoginFetch", async (state) => {
    console.log(state)
    const LoginResult = await axios({
        method: "post",
        url: "http://localhost:8080/login",
        data: state
    }).then((e) => {
        console.log(e.data)
        return e.data
    }).catch((error) => {
        console.log(error)
    })
    if (LoginResult == "아이디/비밀번호 확인 바랍니다.") {
        alert(LoginResult)
        return login({ status: false })
    }
    else {
        alert("환영합니다.")
        return login({ id: state.loginIdInput, AT: LoginResult, status: true })
    }
})

export { LoginFetch }
// export const loginAction = { getAT }