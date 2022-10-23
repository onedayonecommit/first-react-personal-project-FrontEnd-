import { createSlice } from "@reduxjs/toolkit";
import IdReCheckFetch from "../middlewares/IdRecheckfetch";

const IdRecheckSlice = createSlice({
    name: "RecheckSlice",
    initialState: {
        status: false
    },
    reducers: {
        changeStatus: (state, action) => {
            console.log(action.payload)
            state.status = action.payload
        }
    }, extraReducers: (builder) => {
        builder.addCase(IdReCheckFetch.pending, (state, action) => {
            state.status = false
        })
        builder.addCase(IdReCheckFetch.fulfilled, (state, action) => {
            console.log(action.payload)
            state.status = action.payload.status
        })
        builder.addCase(IdReCheckFetch.rejected, (state, action) => {
            state.status = false
        })
    }
})
export default IdRecheckSlice

export const { changeStatus } = IdRecheckSlice.actions