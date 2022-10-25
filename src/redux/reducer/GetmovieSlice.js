import { createSlice } from "@reduxjs/toolkit";
import GetMovieFetch from "../middlewares/Getmoviefetch";

const GetmovieSlice = createSlice({
    name: "Getmovie",
    initialState: { movie: [] }
    // mno: 0,
    // movie_actors: "",
    // movie_director: "",
    // movie_genre: "",
    // movie_info: "",
    // movie_name: "",
    // movie_url: "",
    ,
    extraReducers: (builder) => {
        builder.addCase(GetMovieFetch.pending, (state, action) => {
            // state.status = false
        })
        builder.addCase(GetMovieFetch.fulfilled, (state, action) => {
            console.log(action.payload)
            console.log(state)
            state.movie = action.payload;
            // state.mno = action.payload.mno
            // state.movie_actors = action.payload.movie_actors
            // state.movie_director = action.payload.movie_director
            // state.movie_genre = action.payload.movie_genre
            // state.movie_info = action.payload.movie_info
            // state.movie_name = action.payload.movie_name
            // state.movie_url = action.payload.movie_url
            console.log(state.movie)
        })
        builder.addCase(GetMovieFetch.rejected, (state, action) => {
            // console.log(action.payload)
            // state.mno = ''
            // state.movie_actors = ''
            // state.movie_director = ''
            // state.movie_genre = ''
            // state.movie_info = ''
            // state.movie_name = ''
            // state.movie_url = ''
        })
    }
})

export default GetmovieSlice