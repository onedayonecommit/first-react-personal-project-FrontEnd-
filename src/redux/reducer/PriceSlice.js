import { createSlice } from "@reduxjs/toolkit";

const PriceSlice = createSlice({
    name: "priceSlice",
    initialState: {
        oneprice: 0.99, twoprice: 139.99, fourprice: 4.99
    },
    reducers: {
        changeOnePrice: (state, action) => {
            state.oneprice = action.payload
        },
        changeTwoPrice: (state, action) => {
            state.twoprice = action.payload
        },
        changeFourPrice: (state, action) => {
            state.fourprice = action.payload
        },
    },
    extraReducers: (builder) => {

    }
})
export { PriceSlice }
export const { changeOnePrice, changeTwoPrice, changeFourPrice } = PriceSlice.actions