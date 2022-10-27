import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const EmailChangeFetch = createAsyncThunk("EmailChangeSlice/EmailChangeFetch", (state) => {
    console.log(state)
    const EmailResult = axios({
        url: "http://localhost:8080/emailchanger",
        method: "post",
        data: state
    }).then((e) => {
        return e.data
    }).catch((error) => {
        console.log(error)
    })
    return EmailResult
})

export default EmailChangeFetch