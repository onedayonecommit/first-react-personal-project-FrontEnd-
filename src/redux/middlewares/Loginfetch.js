import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setCookie } from "../../Cookies";
import { login } from "../reducer/LoginSlice";

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
        setCookie("My AT", LoginResult, {
            path: "/",
            secure: true,
            sameSite: "none"
        })
        return login({ id: state.loginIdInput, AT: LoginResult, status: true })
    }
})

export { LoginFetch }
// export const loginAction = { getAT }