import { createSlice } from "@reduxjs/toolkit";
import RegistWriteFetch from "../middlewares/RegistWriteFetch";

const RegistWriteSlice = createSlice({
    name: "RegistWrite",
    initialState: { writestatus: false },
    extraReducers: (builder) => {
        builder.addCase(RegistWriteFetch.pending, (state, action) => {

        })
        builder.addCase(RegistWriteFetch.fulfilled, (state, action) => {
            alert(action.payload.msg)
            state.writestatus = action.payload.writestatus
            action.payload.writestatus == false ? window.location.href = "/welcome/login" : window.location.href = "/welcome/Freeboard"
        })
        builder.addCase(RegistWriteFetch.rejected, (state, action) => {

        })
    }

})

export default RegistWriteSlice