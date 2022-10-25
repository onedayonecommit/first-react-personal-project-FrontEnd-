import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GetMovieFetch = createAsyncThunk("GetmovieSlice/GetMovieFetch", async (state) => {
    console.log("fetch start")
    const movieResult = await axios({
        method: "post",
        url: "http://localhost:8080/getmovie",
        headers: {
            auth: "poobin"
        },
        data: {
            hi: "hihi"
        }
    }).then((e) => {
        console.log(e.data)
        return e.data
    }).catch((error) => {
        console.log(error)
    })
    return movieResult
})

export default GetMovieFetch