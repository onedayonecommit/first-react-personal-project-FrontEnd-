import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const RegistWriteFetch = createAsyncThunk("RegistWriteSlice/RegistWriteFetch", async (state) => {
    console.log(state)
    const RegistResult = await axios({
        url: "http://localhost:8080/registwrite",
        method: "post",
        data: state
    }).then((e) => {
        console.log(e.data)
        return e.data
    }).catch((error) => {
        console.log(error)
    })
    return RegistResult
})

export default RegistWriteFetch

