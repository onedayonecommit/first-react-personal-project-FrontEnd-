import { createSlice } from "@reduxjs/toolkit";
import { MainIdCheckFetch } from "../middlewares/Mainidfetch";

const MainIdCheckSlice = createSlice({
    name: "MainidCheck",
    initialState: { status: 0, login_user_email: "", signup_user_id: "", user_pw: "", signup_main_email: "" },
    reducers: {
        checking: (state, action) => {
            state.status = action.payload
        },
        defUserId: (state, action) => {
            state.login_user_email = action.payload
        },
        defSignupId: (state, action) => {
            state.signup_user_id = action.payload
        },
        changePw: (state, action) => {
            state.user_pw = action.payload
        },
        defSignupMainEamil: (state, action) => {
            state.signup_main_email = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(MainIdCheckFetch.pending, (state, action) => {
            state.status = 0;
        })
        builder.addCase(MainIdCheckFetch.fulfilled, (state, action) => {
            console.log(action.payload)
            state.status = action.payload.payload.statusNumber
            state.login_user_email = action.payload.payload.login_user_email
            state.signup_user_id = action.payload.payload.signup_user_id
        })
        builder.addCase(MainIdCheckFetch.rejected, (state, action) => {
            state.status = 0;
        })
    }
})

export { MainIdCheckSlice }
export const { checking, defSignupId, defUserId, changePw, defSignupMainEamil } = MainIdCheckSlice.actions