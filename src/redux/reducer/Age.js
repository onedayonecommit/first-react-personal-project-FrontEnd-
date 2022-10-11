import { createSlice } from "@reduxjs/toolkit";

const AgeSlice = createSlice({
    name: "ages",
    initialState: { value: 0 },
    reducers: {
        ageup: (state, payload) => {
            state.value = state.value + payload
        },
        agedown: (state, payload) => {
            state.value = state.value - payload
        }
    }
})