import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const MyEmailChangeFetch = createAsyncThunk("MyEmailChangeSlice/MyEmailChangeFetch", async (state) => {
    const MyEmailChangeResult = await axios({
        method: 'post',
        url: "http://localhost:8080/myemailchanger",
        data: state
    })
    return MyEmailChangeResult
})

const MyPassWordChangeFetch = createAsyncThunk("MyPassWordChangeSlice/MyPassWordChangeFetch", async (state) => {
    const MyPassWordChangeResult = await axios({
        method: 'post',
        url: "http://localhost:8080/myPassWordchanger",
        data: state
    })
    return MyPassWordChangeResult
})

const MyPhoneNumChangeFetch = createAsyncThunk("MyPhoneNumChangeSlice/MyPhoneNumChangeFetch", async (state) => {
    const MyPhoneNumChangeResult = await axios({
        method: 'post',
        url: "http://localhost:8080/myPhoneNumchanger",
        data: state
    })
    return MyPhoneNumChangeResult
})

const MyNickNameChangeFetch = createAsyncThunk("MyNickNameChangeSlice/MyNickNameChangeFetch", async (state) => {
    const MyNickNameChangeResult = await axios({
        method: 'post',
        url: "http://localhost:8080/myNickNamechanger",
        data: state
    })
    return MyNickNameChangeResult
})

export { MyEmailChangeFetch, MyPassWordChangeFetch, MyNickNameChangeFetch, MyPhoneNumChangeFetch }