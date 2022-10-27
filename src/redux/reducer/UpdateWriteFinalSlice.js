import { createSlice } from "@reduxjs/toolkit";
import UpdateWriteFinalFetch from "../middlewares/UpdateWriteFinalFetch";

const UpdateWriteFinalSlice = createSlice({
    name: "updatewritefinal",
    initialState: { updatestatus: false },
    extraReducers: (builder) => {
        builder.addCase(UpdateWriteFinalFetch.pending, (state, action) => {
            state.updatestatus = false
        })
        builder.addCase(UpdateWriteFinalFetch.fulfilled, (state, action) => {
            state.updatestatus = action.payload.updatestatus
            if (action.payload.updatestatus == true) {
                alert("수정 완료")
                window.location.href = "/welcome/Freeboard"
            }
            else if (action.payload.updatestatus == false) {
                alert("서버 에러 죄송하지만 재 로그인 후 재 시도 바랍니다.")
                // window.location.href = "/goodbye/logout"
            }
            else if (action.payload.updatestatus == 3) {
                alert("로그인 만료 로그인 후 수정바랍니다.")
                window.location.href = "/goodbye/logout"
            }
            console.log(action.payload)
        })
        builder.addCase(UpdateWriteFinalFetch.rejected, (state, action) => {
            state.updatestatus = false
        })
    }
})

export default UpdateWriteFinalSlice
