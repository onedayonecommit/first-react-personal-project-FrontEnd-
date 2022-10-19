import { createSlice } from "@reduxjs/toolkit";
import { MainIdCheckFetch } from "../middlewares/Mainidfetch";

const MainIdCheckSlice = createSlice({
    name: "mainIdCheck",
    initialState: { status: 0 },
    reducers: {
        checking: (state, action) => {
            console.log(action.payload)
            state.status = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(MainIdCheckFetch.pending, (state, action) => {
            state.status = 0;
        })
        builder.addCase(MainIdCheckFetch.fulfilled, (state, action) => {
            state.status = action.payload.payload.statusNumber
        })
        builder.addCase(MainIdCheckFetch.rejected, (state, action) => {
            state.status = 0;
        })
    }
})

export { MainIdCheckSlice }
export const { checking } = MainIdCheckSlice.actions