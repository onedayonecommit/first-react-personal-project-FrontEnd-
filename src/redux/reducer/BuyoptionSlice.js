import { createSlice } from "@reduxjs/toolkit";
import { BuyOptionFetch } from "../middlewares/Buyoptionfetch";

const BuyOptionSlice = createSlice({
    name: "buyOption",
    initialState: {
        next_redirect_pc_url: "",
        tid: "",
        pg_token: "",
        buy_status: ""
    },
    reducers: {
        changeUrl: (state, action) => {
            state.next_redirect_pc_url = action.payload
        },
        changeTid: (state, action) => {
            state.tid = action.payload
        },
        changePgToken: (state, action) => {
            state.pg_token = action.payload
        },
        changeBuyStatus: (state, action) => {
            state.buy_status = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(BuyOptionFetch.pending, (state, action) => {
            state.buy_status = "로딩 중"
        })
        builder.addCase(BuyOptionFetch.fulfilled, (state, action) => {
            state.next_redirect_pc_url = action.payload.payload.next_redirect_pc_url
            state.tid = action.payload.payload.tid
            state.pg_token = action.payload.payload.pg_token
            state.buy_status = action.payload.payload.buy_status
        })
        builder.addCase(BuyOptionFetch.rejected, (state, action) => {
            state.next_redirect_pc_url = ""
            state.tid = ""
            state.pg_token = ""
            state.buy_status = ""
        })
    }
})

export { BuyOptionSlice }
export const { changeBuyStatus, changePgToken, changeTid, changeUrl } = BuyOptionSlice.actions