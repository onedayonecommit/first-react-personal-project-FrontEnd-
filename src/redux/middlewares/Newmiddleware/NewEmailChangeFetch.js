import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const EmailChangeFetch = createAsyncThunk("EmailChangeSlice/EmailChangeFetch", (state) => {
    const EmailResult = axios({
        url: "http://localhost:8080/emailchanger",
        method: "post",
        data: state
    })
})

export default EmailChangeFetch