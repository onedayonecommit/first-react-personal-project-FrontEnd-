import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const WriteOneFetch = createAsyncThunk("WriteOneSlice/WriteOneFetch", (state) => {
    const writeoneResult = axios({
        url: "http://localhost:8080/writeone",
        method: 'post',
        data: state
    }).then((e) => {
        return e.data
    }).catch((err) => {
        console.log(err)
    })
    return writeoneResult
})

export default WriteOneFetch