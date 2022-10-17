import axios from "axios";
import { useDispatch } from "react-redux";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


const SignupFetch = createAsyncThunk("SignupSlice/SignupFetch", async (state) => {
    console.log(state)
    const signupResult = await axios({
        method: "post",
        url: "http://localhost:8080/signup",
        data: { user_id: state }
    })
    console.log(signupResult)
    return signupResult
})

const SignupIdFetch = createAsyncThunk("SignupSlice/SignupIdFetch", async (state) => {
    console.log(state)
    const idCheckResult = await axios({
        method: "post",
        url: "http://localhost:8080/idcheck",
        data: state
    }).then((e) => {
        return e.data
    }).catch((error) => {
        console.log(error)
    })
    if (idCheckResult == "이미 사용중인 아이디 입니다.") return alert(idCheckResult)
    else if (idCheckResult == "사용 가능합니다.") {
        return alert(idCheckResult)
    }
})

const SignupIdCheckSlice = createSlice({
    name: "idCheck",
    initialState: {
        useid: ""
    }, reducers: {
        idSuc: (state, action) => {
            state.useid = action.payload
            console.log(state)
        }
    }
})

const SignupSlice = createSlice({
    name: "Signup",
    initialState: {
        value: 0,
        status: "Welcome to poo_bin Movie"
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

export { SignupSlice, SignupFetch, SignupIdFetch, SignupIdCheckSlice }
export const { signup } = SignupSlice.actions
export const { idSuc } = SignupIdCheckSlice.actions