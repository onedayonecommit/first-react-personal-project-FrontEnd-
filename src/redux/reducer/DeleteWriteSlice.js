import { createSlice } from "@reduxjs/toolkit";

import DeleteWriteFetch from "../middlewares/DeleteWriteFetch";

const DeleteWriteSlice = createSlice({
    name: "deletewrite",
    initialState: { deletestatus: false },
    extraReducers: (builder) => {
        builder.addCase(DeleteWriteFetch.pending, (state, action) => {

        })
        builder.addCase(DeleteWriteFetch.fulfilled, (state, action) => {
            console.log(action.payload.deletestatus)
            state.deletestatus = action.payload.deletestatus
            if (action.payload.deletestatus == true) {
                alert("삭제가 완료되었습니다.")
                window.location.href = "/welcome/Freeboard"
            } else if (action.payload.deletestatus == false) {
                alert("글 작성자만 삭제가 가능합니다.")
            } else {
                alert("로그인이 만료되었으므로 작성자인지 확인이 불가합니다. 재 로그인 바랍니다.")
                window.location.href = "/goodbye/logout"
            }
        })
        builder.addCase(DeleteWriteFetch.rejected, (state, action) => {

        })
    }
})
export default DeleteWriteSlice