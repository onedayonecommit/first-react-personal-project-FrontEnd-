import { createSlice } from "@reduxjs/toolkit";
import { MainIdCheckFetch } from "../middlewares/Mainidfetch";

const MainIdCheckSlice = createSlice({
    name: "MainidCheck",
    initialState: { status: 0, login_user_id: "", signup_user_id: "", user_pw: "", main_id: "" },
    reducers: {
        checking: (state, action) => {
            state.status = action.payload
        },
        defUserId: (state, action) => {
            state.login_user_id = action.payload
        },
        defSignupId: (state, action) => {
            state.signup_user_id = action.payload
        },
        changePw: (state, action) => {
            state.user_pw = action.payload
        },
        defMainId: (state, action) => {
            state.main_id = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(MainIdCheckFetch.pending, (state, action) => {
            state.status = 0;
        })
        builder.addCase(MainIdCheckFetch.fulfilled, (state, action) => {
            console.log(action.payload)
            state.status = action.payload.payload.statusNumber
            state.login_user_id = action.payload.payload.login_user_id
            state.signup_user_id = action.payload.payload.signup_user_id
        })
        builder.addCase(MainIdCheckFetch.rejected, (state, action) => {
            state.status = 0;
        })
    }
})

export { MainIdCheckSlice }
export const { checking, defSignupId, defUserId, changePw, defMainId } = MainIdCheckSlice.actions