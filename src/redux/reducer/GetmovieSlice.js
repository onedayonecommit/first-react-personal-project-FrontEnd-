import { createSlice } from "@reduxjs/toolkit";
import GetMovieFetch from "../middlewares/Getmoviefetch";

const GetmovieSlice = createSlice({
    name: "Getmovie",
    initialState: { movie: [] }
    ,
    extraReducers: (builder) => {
        builder.addCase(GetMovieFetch.pending, (state, action) => {
        })
        builder.addCase(GetMovieFetch.fulfilled, (state, action) => {
            console.log(action.payload)
            state.movie = action.payload;
        })
        builder.addCase(GetMovieFetch.rejected, (state, action) => {
        })
    }
})

export default GetmovieSlice