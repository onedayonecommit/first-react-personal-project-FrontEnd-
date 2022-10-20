import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PriceFetch = async (state) => {
    const PriceFetchResult = await axios({
        method: "post",
        url: "",
        data: state
    }).then((e) => {
        return e.data
    }).catch((error) => {
        console.log(error)
    })
    return PriceFetchResult;
}

