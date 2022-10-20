import axios from "axios";
import { useDispatch } from "react-redux";
import { SignupFetch, SignupIdFetch } from "../middlewares/Signupfetch";

const { createSlice } = require("@reduxjs/toolkit");

/**중복 확인 */
const SignupIdCheckSlice = createSlice({
    name: "idCheck",
    initialState: {
        user_id: "",
        using: false,
        idCheckStatus: "서버 상태 좋음",
        user_pw: ""

    }, reducers: {
        idSuc: (state, action) => {
            state.user_id
                = action.payload
            state.using = true
            console.log(state)
        },
        changeId: (state, action) => {
            state.user_id = action.payload;
        },
        changePw: (state, action) => {
            state.user_pw = action.payload;
        }
    }, extraReducers: (builder) => {
        builder.addCase(SignupIdFetch.pending, (state, action) => {
            state.idCheckStatus = "중복 확인중에 있습니다. 잠시만 기다려주십시오."
            state.user_id
                = ""
            state.using = false
        })
        builder.addCase(SignupIdFetch.fulfilled, (state, action) => {
            state.idCheckStatus = "확인 완료 되었습니다. 결과 확인 부탁드립니다."
            state.user_id
                = action.payload.payload.id
            state.using = action.payload.payload.status
        })
        builder.addCase(SignupIdFetch.rejected, (state, action) => {
            state.idCheckStatus = "알 수 없는 에러가 발생하였습니다. 잠시 후 재 시도 바랍니다."
        })
    }
})

/**회원가입 */
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
export const { idSuc, changeId, changePw } = SignupIdCheckSlice.actions;
