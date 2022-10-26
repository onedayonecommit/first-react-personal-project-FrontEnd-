import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const NicknameChangeFetch = createAsyncThunk("NicknameSlice/NicknameFetch", (state) => {
    const NicknameResult = axios({
        url: "http://localhost:8080/nicknamechanger",
        method: "post",
        data: state
    })
})

export default NicknameChangeFetch