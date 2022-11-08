import { createSlice } from "@reduxjs/toolkit";
import { MyEmailChangeFetch, MyNickNameChangeFetch, MyPassWordChangeFetch, MyPhoneNumChangeFetch } from "../middlewares/MyInfoChangeFetch";

const MyInfoChangeSlice = createSlice({
    name: "EmailChanger",
    initialState: {
        changeEmailStatus: "false",
        changePassWordStatus: "false",
        changePhoneNumStatus: "false",
        changeNickNameStatus: "false",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(MyEmailChangeFetch.pending, (state, action) => {

        })
        builder.addCase(MyEmailChangeFetch.fulfilled, (state, action) => {
            state.changeEmailStatus = action.payload
        })
        builder.addCase(MyEmailChangeFetch.rejected, (state, action) => {

        })
        builder.addCase(MyPassWordChangeFetch.pending, (state, action) => {

        })
        builder.addCase(MyPassWordChangeFetch.fulfilled, (state, action) => {
            state.changePassWordStatus = action.payload
        })
        builder.addCase(MyPassWordChangeFetch.rejected, (state, action) => {

        })
        builder.addCase(MyPhoneNumChangeFetch.pending, (state, action) => {

        })
        builder.addCase(MyPhoneNumChangeFetch.fulfilled, (state, action) => {
            state.changePhoneNumStatus = action.payload
        })
        builder.addCase(MyPhoneNumChangeFetch.rejected, (state, action) => {

        })
        builder.addCase(MyNickNameChangeFetch.pending, (state, action) => {

        })
        builder.addCase(MyNickNameChangeFetch.fulfilled, (state, action) => {
            state.changeNickNameStatus = action.payload
        })
        builder.addCase(MyNickNameChangeFetch.rejected, (state, action) => {

        })
    }
})

export { MyInfoChangeSlice }