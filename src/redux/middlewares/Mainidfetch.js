import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { checking } from "../reducer/MainidSlice";

const MainIdCheckFetch = createAsyncThunk("MainIdCheckSlice/MainIdCheckFetch", async (state) => {
    console.log(state)
    const mainIdCheckResult = await axios({
        method: "post",
        url: "http://localhost:8080/main/id/check",
        data: state
    }).then((e) => {
        return e.data
    }).catch((error) => {
        console.log(error)
    })
    console.log(mainIdCheckResult)
    if (mainIdCheckResult === "로그인 창으로") {
        alert("로그인 창으로 이동합니다.")
        console.log(state.user_id)
        return checking({ statusNumber: 1, login_user_id: state.user_id, signup_user_id: "" })
    }
    else if (mainIdCheckResult === "회원가입 창으로") {
        alert("해당 이메일로 가입 가능")
        return checking({ statusNumber: 2, signup_user_id: state.user_id, login_user_id: "" })
    }
})

export { MainIdCheckFetch }