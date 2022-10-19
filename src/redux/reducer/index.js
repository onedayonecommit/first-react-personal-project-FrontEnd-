import { combineReducers } from "redux";
import { SignupIdCheckSlice, SignupSlice } from "./SignupSlice";
import { LoginSlice } from "./LoginSlice";
import { MainIdCheckSlice } from "./MainidSlice";

const rootReducer = combineReducers({
    Signup: SignupSlice.reducer,
    Login: LoginSlice.reducer,
    idCheck: SignupIdCheckSlice.reducer,
    MainidCheck: MainIdCheckSlice.reducer
});

export default rootReducer;