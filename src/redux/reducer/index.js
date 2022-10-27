import { combineReducers } from "redux";
import { SignupIdCheckSlice, SignupSlice } from "./SignupSlice";
import { LoginSlice } from "./LoginSlice";
import { MainIdCheckSlice } from "./MainidSlice";
import { PriceSlice } from "./PriceSlice";
import { BuyOptionSlice } from "./BuyoptionSlice";
import IdRecheckSlice from "./IdRecheckSlice";
import GetmovieSlice from "./GetmovieSlice";
import RegistWriteSlice from "./RegistWriteSlice";
import WriteAllSlice from "./WriteAllSlice";
import EnterMypageSlice from "./EnterMypageSlice";
import WriteOneSlice from "./WriteOneSlice";
import DeleteWriteSlice from "./DeleteWriteSlice";
import UpdateWriteSlice from "./UpdateWriteSlice";
import UpdateWriteFinalSlice from "./UpdateWriteFinalSlice";
import UpdateWriteSeeSlice from "./UpdateWriteSeeSlice";
import ChangeSlice from "./ChangeSlice";

const rootReducer = combineReducers({
    Signup: SignupSlice.reducer,
    Login: LoginSlice.reducer,
    idCheck: SignupIdCheckSlice.reducer,
    MainidCheck: MainIdCheckSlice.reducer,
    Price: PriceSlice.reducer,
    BuyOption: BuyOptionSlice.reducer,
    idRecheck: IdRecheckSlice.reducer,
    getMovie: GetmovieSlice.reducer,
    registWrite: RegistWriteSlice.reducer,
    writeAll: WriteAllSlice.reducer,
    enterMypage: EnterMypageSlice.reducer,
    writeOne: WriteOneSlice.reducer,
    deleteWrite: DeleteWriteSlice.reducer,
    updateWrite: UpdateWriteSlice.reducer,
    updateWriteFinal: UpdateWriteFinalSlice.reducer,
    updateWriteSee: UpdateWriteSeeSlice.reducer,
    change: ChangeSlice.reducer
});

export default rootReducer;