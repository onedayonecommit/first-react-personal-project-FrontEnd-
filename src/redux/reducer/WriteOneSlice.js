import { createSlice } from "@reduxjs/toolkit";
import WriteOneFetch from "../middlewares/WriteOneFetch";

const WriteOneSlice = createSlice({
    name: "writeone",
    initialState: {
        title: "",
        content: "",
        bno: 0,
        writer: "",
        createdAt: "",
        views_point: 0,
        updatedAt: ""
    },
    extraReducers: (builder) => {
        builder.addCase(WriteOneFetch.pending, (state, action) => {

        })
        builder.addCase(WriteOneFetch.fulfilled, (state, action) => {
            console.log(action.payload)
            state.title = action.payload.title
            state.content = action.payload.content
            state.bno = action.payload.bno
            state.writer = action.payload.writer
            state.createdAt = action.payload.createdAt
            state.views_point = action.payload.views_point
            state.updatedAt = action.payload.updatedAt
        })
        builder.addCase(WriteOneFetch.rejected, (state, action) => {

        })
    }
})

export default WriteOneSlice