import { createSlice } from "@reduxjs/toolkit";
import { MainIdCheckFetch } from "../middlewares/Mainidfetch";

const MainIdCheckSlice = createSlice({
    name: "mainIdCheck",
    initialState: { status: 0 },
    reducers: {
        checking: (state, action) => {
            state.status = action.payload
            console.log(state)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(MainIdCheckFetch.pending, (state, action) => {
            state.status = 0;
        })
        builder.addCase(MainIdCheckFetch.fulfilled, (state, action) => {
            state.status = action.payload.payload.statusNumber
            console.log(state.status)
        })
        builder.addCase(MainIdCheckFetch.rejected, (state, action) => {
            state.status = 0;
        })
    }
})

export { MainIdCheckSlice }
export const { checking } = MainIdCheckSlice.actions