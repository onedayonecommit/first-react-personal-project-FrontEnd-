import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { idSuc } from "../reducer/SignupSlice";

/**회원가입 */
const SignupFetch = createAsyncThunk("SignupSlice/SignupFetch", async (state) => {
    console.log(state)
    const signupResult = await axios({
        method: "post",
        url: "http://localhost:8080/signup",
        data: state
    }).then((e) => {
        return e.data
    }).catch((error) => {
        console.log(error)
    })
    if (signupResult == "축하합니다.") {
        alert("축하합니다.")
        return window.location.href = "/welcome/login"
    }
    else {
        console.log(signupResult)
        alert(signupResult)
        return window.location.href = "/"
    }
    // return signupResult
})


/**아이디 중복 확인 */
const SignupIdFetch = createAsyncThunk("SignupSlice/SignupIdFetch", async (state) => {

    console.log(state)
    const idCheckResult = await axios({
        method: "post",
        url: "http://localhost:8080/idcheck",
        data: state
    }).then((e) => {
        return e.data
    }).catch((error) => {
        console.log(error)
    })
    if (idCheckResult == "이미 사용중인 아이디 입니다.") {
        console.log(idCheckResult)
        alert(idCheckResult)
        return idSuc({ id: "", status: false })
    }
    else if (idCheckResult == "사용 가능합니다.") {
        alert(idCheckResult)
        return idSuc({ id: state.IdInput, status: true })
    }
})

export { SignupFetch, SignupIdFetch }