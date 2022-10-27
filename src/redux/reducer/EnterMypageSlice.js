import { createSlice } from "@reduxjs/toolkit";
import EnterMypageFetch from "../middlewares/EnterMypageFetch";

const EnterMypageSlice = createSlice({
    name: "EnterMypage",
    initialState: {
        sucstatus: false,
        user_email: "",
        user_phone: "",
        user_nickname: "",
        user_ticket: 0,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(EnterMypageFetch.pending, (state, action) => {
            state.sucstatus = false
        })
        builder.addCase(EnterMypageFetch.fulfilled, (state, action) => {
            console.log(action.payload)
            state.sucstatus = action.payload.sucstatus
            state.user_email = action.payload.user_email
            state.user_phone = action.payload.user_phone
            state.user_nickname = action.payload.user_nickname
            state.user_ticket = action.payload.user_ticket
            action.payload.sucstatus == false ? window.location.href = "/goodbye/logout" : null
        })
        builder.addCase(EnterMypageFetch.rejected, (state, action) => {
            state.sucstatus = false
        })
    }
})

export default EnterMypageSlice
