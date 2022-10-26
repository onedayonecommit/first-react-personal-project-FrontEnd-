import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PhonenumChangeFetch = createAsyncThunk("PhonenumChangeSlice/PhonenumChangeFetch", (state) => {
    const PhonenumResult = axios({
        url: "http://localhost:8080/phonenumchanger",
        method: "post",
        data: state
    })
})

export default PhonenumChangeFetch