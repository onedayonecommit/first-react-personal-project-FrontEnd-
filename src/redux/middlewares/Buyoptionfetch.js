import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { changePgToken, changeUrl } from "../reducer/BuyoptionSlice";

const BuyOptionFetch = createAsyncThunk("BuyoptionSlice/BuyOptionFetch", async (state) => {
    console.log(state)
    const buyResult = await axios({
        method: "POST",
        url: "https://kapi.kakao.com/v1/payment/ready",
        headers: {
            Authorization: "KakaoAK a138e09487948affbe264ae294b29466",
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        data: {
            cid: "TC0ONETIME",
            partner_order_id: "0609",
            partner_user_id: "gyeonghwan",
            item_name: state.optionName,
            quantity: 1,
            total_amount: state.optionPrice,
            vat_amount: 200,
            tax_free_amount: 0,
            approval_url: "https://localhost:3000/kakaowait",
            fail_url: "https://localhost:3000/kakaofail",
            cancel_url: "https://localhost:3000/kakaocancel",
        }
    }).then((e) => {
        return e.data
    }).catch((error) => {
        console.log(error)
    })
    return buyResult
})
export { BuyOptionFetch }