import { createSlice } from "@reduxjs/toolkit";

const AgeSlice = createSlice({
    name: "ageslice",
    initialState: { value: 10 },
    reducers: {
        ageup: (state, action) => {
            state.value = state.value + action.payload
        },
        agedown: (state, action) => {
            state.value = state.value - action.payload
        }
    }
})

export default AgeSlice
export const { ageup, agedown } = AgeSlice.actions