import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { idSuc } from "../reducer/Signup";

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
    if (signupResult == "축하합니다.") return alert("축하합니다.")
    else {
        console.log(signupResult)
        return alert(signupResult)
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