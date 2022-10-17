import { combineReducers } from "redux";
import { SignupSlice } from "./Signup";
import { LoginSlice } from "./Login";

const rootReducer = combineReducers({
    Signup: SignupSlice.reducer,
    Login: LoginSlice.reducer
});

export default rootReducer;