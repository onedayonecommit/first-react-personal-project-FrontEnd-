import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: "counterslice",
    initialState: { value: 0 },
    reducers: {
        up: (state, action) => {
            state.value = state.value + action.payload
        },
        down: (state, action) => {
            state.value = state.value - action.payload
        }
    }
})

export default CounterSlice;
export const { up, down } = CounterSlice.actions