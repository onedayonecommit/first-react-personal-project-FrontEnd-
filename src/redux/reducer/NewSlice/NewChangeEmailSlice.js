import { createSlice } from "@reduxjs/toolkit";

const EmailChangeSlice = createSlice({
    name: "emailChanger",
    initialState: {},
    reducers: {
        email: "email"
    },
    extraReducers: (builder) => {
        builder.addCase()
        builder.addCase()
        builder.addCase()
    }
})

export default EmailChangeSlice