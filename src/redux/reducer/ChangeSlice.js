import { createSlice } from "@reduxjs/toolkit";
import EmailChangeFetch from "../middlewares/NewEmailChangeFetch";
import NicknameChangeFetch from "../middlewares/NewNicknameChangeFetch";
import PhonenumChangeFetch from "../middlewares/NewPhonenumChangeFetch";
import ChangePwFetch from "../middlewares/NewPwChangeFetch";

const ChangeSlice = createSlice({
    name: "changeall",
    initialState: {},
    extraReducers: (builder) => {
        builder.addCase(EmailChangeFetch.pending, (state, action) => { })
        builder.addCase(EmailChangeFetch.fulfilled, (state, action) => {
            console.log(action.payload)
            switch (action.payload.change_email_status) {
                case true:
                    alert("변경이 완료되었습니다.")
                    return window.location.href = "/welcome/mypage"
                case false:
                    alert("에러 발생 재 로그인 후 재 변경 시도 바랍니다.")
                    return window.location.href = "/goodbye/logout"
                case 3:
                    alert("로그인 만료되었습니다. 재 로그인 후 변경 바랍니다.")
                    return window.location.href = "/goodbye/logout"
                case 4:
                    return alert("이미 사용중인 이메일 입니다.")
                default:
                    alert("에러발생")
                    return window.location.href = "/goodbye/logout"
            }
        })
        builder.addCase(EmailChangeFetch.rejected, (state, action) => { })
        builder.addCase(NicknameChangeFetch.pending, (state, action) => { })
        builder.addCase(NicknameChangeFetch.fulfilled, (state, action) => {
            switch (action.payload.change_nickname_status) {
                case true:
                    alert("변경이 완료되었습니다.")
                    return window.location.href = "/welcome/mypage"
                case false:
                    alert("에러 발생 재 로그인 후 재 변경 시도 바랍니다.")
                    return window.location.href = "/goodbye/logout"
                case 3:
                    alert("로그인 만료되었습니다. 재 로그인 후 변경 바랍니다.")
                    return window.location.href = "/goodbye/logout"
                default:
                    alert("에러발생")
                    return window.location.href = "/goodbye/logout"
            }
        })
        builder.addCase(NicknameChangeFetch.rejected, (state, action) => { })
        builder.addCase(PhonenumChangeFetch.pending, (state, action) => { })
        builder.addCase(PhonenumChangeFetch.fulfilled, (state, action) => {
            switch (action.payload.change_phonenum_status) {
                case true:
                    alert("변경이 완료되었습니다.")
                    return window.location.href = "/welcome/mypage"
                case false:
                    alert("에러 발생 재 로그인 후 재 변경 시도 바랍니다.")
                    return window.location.href = "/goodbye/logout"
                case 3:
                    alert("로그인 만료되었습니다. 재 로그인 후 변경 바랍니다.")
                    return window.location.href = "/goodbye/logout"
                case 4:
                    return alert("이미 사용중인 닉네임 입니다.")
                default:
                    alert("에러발생")
                    return window.location.href = "/goodbye/logout"
            }
        })
        builder.addCase(PhonenumChangeFetch.rejected, (state, action) => { })
        builder.addCase(ChangePwFetch.pending, (state, action) => { })
        builder.addCase(ChangePwFetch.fulfilled, (state, action) => {
            switch (action.payload.change_pw_status) {
                case true:
                    alert("변경이 완료되었습니다.")
                    return window.location.href = "/welcome/mypage"
                case false:
                    alert("에러 발생 재 로그인 후 재 변경 시도 바랍니다.")
                    return window.location.href = "/goodbye/logout"
                case 3:
                    alert("로그인 만료되었습니다. 재 로그인 후 변경 바랍니다.")
                    return window.location.href = "/goodbye/logout"
                default:
                    alert("에러발생")
                    return window.location.href = "/goodbye/logout"
            }
        })
        builder.addCase(ChangePwFetch.rejected, (state, action) => { })
    }
})

export default ChangeSlice