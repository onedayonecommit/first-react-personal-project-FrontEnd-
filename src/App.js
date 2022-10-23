import { Route, Routes } from "react-router-dom";
import { Kakaopay, Login, Main, SignupFinal, SignupSecond, Signuptest, Kakaocancel, Kakaofail, SignupFinally, Kakaopayend } from "./page";

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
      </Routes>
    </div >
  );
}

export default App;
