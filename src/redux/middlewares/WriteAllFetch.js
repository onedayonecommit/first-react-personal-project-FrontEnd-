import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const WriteAllFetch = createAsyncThunk("WriteAllSlice/WriteAllFetch", async (state) => {
    console.log("fetch start")
    const writeResult = await axios({
        method: "post",
        url: "http://localhost:8080/writeall",
        data: { hi: 'hui' }
    }).then((e) => {
        console.log(e.data)
        return e.data
    }).catch((error) => {
        console.log(error)
    })
    return writeResult
})

export default WriteAllFetch