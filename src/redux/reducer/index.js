import { combineReducers } from "redux";
import { SignupIdCheckSlice, SignupSlice } from "./Signup";
import { LoginSlice } from "./Login";

const rootReducer = combineReducers({
    Signup: SignupSlice.reducer,
    Login: LoginSlice.reducer,
    idCheck: SignupIdCheckSlice.reducer
});

export default rootReducer;