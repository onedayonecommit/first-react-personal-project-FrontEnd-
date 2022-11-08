import { combineReducers } from "redux";
import { MyInfoChangeSlice } from "./MyInfoChangeSlice";

const rootReducer = combineReducers({
    Myinfo: MyInfoChangeSlice
});

export default rootReducer;