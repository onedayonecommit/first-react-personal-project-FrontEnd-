import { createSlice } from "@reduxjs/toolkit";
import UpdateWriteFetch from "../middlewares/UpdateWriteFetch";

const UpdateWriteSlice = createSlice({
    name: "updateWrite",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(UpdateWriteFetch.pending, (state, action) => {

        })
        builder.addCase(UpdateWriteFetch.fulfilled, (state, action) => {
            console.log(action.payload)
            if (action.payload.updatestatus == true) {
                window.location.href = "/welcome/freeboard/update/" + action.payload.bno
            } else if (action.payload.updatestatus == false) {
                alert("글 작성자만 수정이 가능합니다.")
            } else {
                alert("로그인이 만료되었으므로 작성자인지 확인이 불가합니다. 재 로그인 바랍니다.")
                window.location.href = "/goodbye/logout"
            }
        })
        builder.addCase(UpdateWriteFetch.rejected, (state, action) => {

        })
    }
})

export default UpdateWriteSlice

