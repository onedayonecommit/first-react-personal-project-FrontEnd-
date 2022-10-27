import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const NicknameChangeFetch = createAsyncThunk("NicknameSlice/NicknameFetch", (state) => {
    console.log(state)
    const NicknameResult = axios({
        url: "http://localhost:8080/nicknamechanger",
        method: "post",
        data: state
    }).then((e) => {
        return e.data
    }).catch((error) => {
        console.log(error)
    })
    return NicknameResult
})

export default NicknameChangeFetch