import { combineReducers } from "redux";
import { SignupIdCheckSlice, SignupSlice } from "./SignupSlice";
import { LoginSlice } from "./LoginSlice";
import { MainIdCheckSlice } from "./MainidSlice";
import { PriceSlice } from "./PriceSlice";
import { BuyOptionSlice } from "./BuyoptionSlice";

const rootReducer = combineReducers({
    Signup: SignupSlice.reducer,
    Login: LoginSlice.reducer,
    idCheck: SignupIdCheckSlice.reducer,
    MainidCheck: MainIdCheckSlice.reducer,
    Price: PriceSlice.reducer,
    BuyOption: BuyOptionSlice.reducer
});

export default rootReducer;