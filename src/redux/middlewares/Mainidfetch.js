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
    if (mainIdCheckResult == "로그인 창으로") {
        return checking({ statusNumber: 1, })
    }
    else if (mainIdCheckResult == "회원가입 창으로") { return checking({ statusNumber: 2, }) }
})

export { MainIdCheckFetch }