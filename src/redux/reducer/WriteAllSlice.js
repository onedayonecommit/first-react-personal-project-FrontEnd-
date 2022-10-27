import { createSlice } from "@reduxjs/toolkit";
import WriteAllFetch from "../middlewares/WriteAllFetch";

const WriteAllSlice = createSlice({
    name: "Writeall",
    initialState: { Write: [] }
    ,
    extraReducers: (builder) => {
        builder.addCase(WriteAllFetch.pending, (state, action) => {
        })
        builder.addCase(WriteAllFetch.fulfilled, (state, action) => {
            console.log("god")
            state.Write = action.payload
            console.log(action.payload)
        })
        builder.addCase(WriteAllFetch.rejected, (state, action) => {
        })
    }
})

export default WriteAllSlice