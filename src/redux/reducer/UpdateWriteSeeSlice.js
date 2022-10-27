import { createSlice } from "@reduxjs/toolkit";
import UpdateWriteSeeFetch from "../middlewares/UpdateWriteSeeFetch";

const UpdateWriteSeeSlice = createSlice({
    name: "updatewritesee",
    initialState: {
        content: "",
        title: "",
    },
    reducers: {
        changetitle: (state, action) => {
            state.title = action.payload
        },
        changecontent: (state, action) => {
            state.content = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(UpdateWriteSeeFetch.pending, (state, action) => {
            state.content = ""
            state.title = ""
        })
        builder.addCase(UpdateWriteSeeFetch.fulfilled, (state, action) => {
            console.log(action.payload)
            state.content = action.payload.content
            state.title = action.payload.title
        })
        builder.addCase(UpdateWriteSeeFetch.rejected, (state, action) => {
            state.content = ""
            state.title = ""
        })
    }
})

export default UpdateWriteSeeSlice
export const { changetitle, changecontent } = UpdateWriteSeeSlice.actions