import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const DeleteWriteFetch = createAsyncThunk("DeleteWriteSlice/DeleteWriteFetch", async (state) => {
    console.log(state)
    const DeleteReulst = await axios({
        url: "http://localhost:8080/delete/write",
        method: "post",
        data: state
    }).then((e) => {
        return e.data
    }).catch((error) => {
        console.log(error)
    })
    console.log(DeleteReulst)
    return DeleteReulst
})

export default DeleteWriteFetch