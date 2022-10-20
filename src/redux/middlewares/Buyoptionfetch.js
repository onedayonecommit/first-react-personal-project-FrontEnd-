import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BuyOptionFetch = createAsyncThunk("BuyoptionSlice/BuyOptionFetch", async (state) => {
    console.log(state)
    const buyResult = await axios({
        method: "POST",
        url: "https://kapi.com/v1/payment/ready",
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
            total_amount: 1000000,
            vat_amount: 200,
            tax_free_amount: 0,
            approval_url: "",
            approval_url: "",
            approval_url: "",
        }
    })
    return buyResult
})
export { BuyOptionFetch }