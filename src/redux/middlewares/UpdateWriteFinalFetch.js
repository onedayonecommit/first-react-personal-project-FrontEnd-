import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const UpdateWriteFinalFetch = createAsyncThunk("UpdateWriteFinalSlice/UpdateWriteFinalFetch", async (state) => {
    const UpdateFinalResult = await axios({
        url: "http://localhost:8080/update/write",
        method: "post",
        data: state
    }).then((e) => {
        return e.data
    }).catch((error) => {
        console.log(error)
    })
    console.log(UpdateFinalResult)
    return UpdateFinalResult;
})

export default UpdateWriteFinalFetch