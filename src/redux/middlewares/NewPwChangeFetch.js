import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ChangePwFetch = createAsyncThunk("PwChangeSlice/ChangePwFetch", (state) => {
    console.log(state)
    const ChangePwResult = axios({
        url: "http://localhost:8080/pwchanger",
        method: "post",
        data: state
    }).then((e) => {
        return e.data
    }).catch((error) => {
        console.log(error)
    })
    return ChangePwResult
})

export default ChangePwFetch