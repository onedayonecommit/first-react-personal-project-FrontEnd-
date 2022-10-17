import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { login } from "../reducer/Login";

// const getAT = createAsyncThunk("GET/AT", async (dispatch, getState) => {
//     const result = await axios({
//         method: "post",
//         url: "http://localhost:8080/login",
//         data: {
//             user_id: "",
//             user_pw: "",
//         }
//     })
//     if (result.data) {
//         dispatch(login((result.refreshtoken)))
//     }
// });

// export const loginAction = { getAT }