import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const UpdateWriteFetch = createAsyncThunk("UpdateWriteSlice/UpdateWriteFetch", async (state) => {
    const updateResult = await axios({
        url: "http://localhost:8080/update/write/enter",
        method: "post",
        data: state
    }).then((e) => {
        return e.data
    }).catch((error) => {
        console.log(error)
    })
    console.log(updateResult)
    return updateResult
})

export default UpdateWriteFetch