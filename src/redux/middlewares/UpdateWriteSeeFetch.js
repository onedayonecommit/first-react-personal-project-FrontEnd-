import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const UpdateWriteSeeFetch = createAsyncThunk("UpdateWriteSeeSlice/UpdateWriteSeeFetch", async (state) => {
    const seeResult = await axios({
        url: "http://localhost:8080/update/write/see",
        method: "post",
        data: state
    }).then((e) => {
        return e.data
    }).catch((error) => {
        console.log(error)
    })
    console.log(seeResult)
    return seeResult
})

export default UpdateWriteSeeFetch