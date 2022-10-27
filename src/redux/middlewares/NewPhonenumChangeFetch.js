import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PhonenumChangeFetch = createAsyncThunk("PhonenumChangeSlice/PhonenumChangeFetch", (state) => {
    console.log(state)
    const PhonenumResult = axios({
        url: "http://localhost:8080/phonenumchanger",
        method: "post",
        data: state
    }).then((e) => {
        return e.data
    }).catch((error) => {
        console.log(error)
    })
    return PhonenumResult
})

export default PhonenumChangeFetch