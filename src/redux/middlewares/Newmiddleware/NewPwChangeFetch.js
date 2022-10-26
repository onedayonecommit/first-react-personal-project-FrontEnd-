import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ChangePwFetch = createAsyncThunk("PwChangeSlice/ChangePwFetch", (state) => {
    const ChangePwResult = axios({
        url: "http://localhost:8080/pwchanger",
        method: "post",
        data: state
    })
})

export default ChangePwFetch