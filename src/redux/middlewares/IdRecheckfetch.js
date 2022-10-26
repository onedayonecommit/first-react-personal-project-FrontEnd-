import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const IdReCheckFetch = createAsyncThunk("MainidSlice/IdReCheckFetch", async (state) => {
    const res = await axios({
        url: "http://localhost:8080/id/recheck",
        method: "post",
        data: state
    }).then((e) => {
        return e.data
    }).catch((error) => {
        console.log(error)
    })
    if (res === "이미 있는 아이디 입니다. 아이디 찾기 또는 다른 아이디 이용바랍니다.") {
        return alert(res)
    }
    else {
        alert("가입" + res.msg + " 신규 가입 결제창으로 이동합니다.")
        return res
    }
})

export default IdReCheckFetch