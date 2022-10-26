import { Route, Routes } from "react-router-dom";
import { Kakaopay, Login, Main, SignupFinal, SignupSecond, Signuptest, Kakaocancel, Kakaofail, SignupFinally, Kakaopayend, ChangeEmail, ChangePw, ChangePhonenum, ChangeNick } from "./page";
import Footer from './components/Footer/Footer';
import Mypage from "./page/Mypage/Mypage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/welcome/signup" element={<Signuptest />}></Route>
        <Route path="/welcome/signup/first" element={<SignupSecond />}></Route>
        <Route path="/welcome/signup/second" element={<SignupFinal />}></Route>
        <Route path="/welcome/login" element={<Login />}></Route>
        <Route path="/kakaowait" element={<Kakaopay />}></Route>
        <Route path="/kakaofail" element={<Kakaofail />}></Route>
        <Route path="/kakaocancel" element={<Kakaocancel />}></Route>
        <Route path="/kakaoend" element={<Kakaopayend />}></Route>
        <Route path="/welcome/mypage" element={<Mypage />}></Route>
        <Route path="/welcome/changeemail" element={<ChangeEmail />}></Route>
        <Route path="/welcome/changepw" element={<ChangePw />}></Route>
        <Route path="/welcome/changephonenum" element={<ChangePhonenum />}></Route>
        <Route path="/welcome/changenickname" element={<ChangeNick />}></Route>
      </Routes>
      {/* <Footer /> */}
    </div >
  );
}

export default App;
