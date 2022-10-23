import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const KakaoFinalFetch = createAsyncThunk("KakaoFianlFetch/Fetch", (state) => {
    const buyResult = axios({
        method: "POST",
        url: "http://localhost:8080/paysuc",
        data: state
    }).then((e) => {
        alert(e.data)
        window.location.href = "/welcome/login"
        return e.data
    }).catch((error) => {
        console.log(error)
    })
    return buyResult
})

export default KakaoFinalFetch