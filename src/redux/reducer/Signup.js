import axios from "axios";
import { useDispatch } from "react-redux";
import { SignupFetch, SignupIdFetch } from "../middlewares/Signup";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


const SignupIdCheckSlice = createSlice({
    name: "idCheck",
    initialState: {
        useid: "",
        using: false,
        idCheckStatus: "서버 상태 좋음"
    }, reducers: {
        idSuc: (state, action) => {
            state.useid = action.payload
            console.log(state)
        }
    }, extraReducers: (builder) => {
        builder.addCase(SignupIdFetch.pending, (state, action) => {
            state.idCheckStatus = "ID duplicate check in progress. please wait for a moment."
        })
        builder.addCase(SignupIdFetch.fulfilled, (state, action) => {
            state.idCheckStatus = "Duplicate check completed. Please check the result."
        })
        builder.addCase(SignupIdFetch.rejected, (state, action) => {
            state.idCheckStatus = "Sorry, it was rejected due to a temporary error, please try again"
        })
    }
})

const SignupSlice = createSlice({
    name: "Signup",
    initialState: {
        value: 0,
        signUpStatus: "Welcome to poo_bin Movie"
    },
    reducers: {
        signup: (state, action) => {
            state = action.payload
            console.log(state)
        }
    }, extraReducers: (builder) => {
        builder.addCase(SignupFetch.pending, (state, action) => {
            state.status = "Registration is currently in progress. please wait for a moment."
            state.value = state.value + 1
        })
        builder.addCase(SignupFetch.fulfilled, (state, action) => {
            state.status = "Congratulations on joining our page"
            state.value = state.value - 1
        })
        builder.addCase(SignupFetch.rejected, (state, action) => {
            state.status = "Sorry, it was rejected due to a temporary error, please try again"
            state.value = state.value - 1
        })
    }
})

export { SignupSlice, SignupIdCheckSlice }
export const { signup } = SignupSlice.actions
export const { idSuc } = SignupIdCheckSlice.actions
