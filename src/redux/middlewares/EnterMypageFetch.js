import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const EnterMypageFetch = createAsyncThunk("EnterMypageSlice", async (state) => {
    const enterResult = await axios({
        url: "http://localhost:8080/entermypage",
        method: "post",
        data: state
    }).then((e) => {
        return e.data
    }).catch((error) => {
        console.log(error)
    })
    console.log(enterResult)
    return enterResult;
})

export default EnterMypageFetch