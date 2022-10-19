import { Route, Routes } from "react-router-dom";
import { Login, Main, SignupSecond, Signuptest } from "./page";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/welcome/signup" element={<Signuptest />}></Route>
        <Route path="/welcome/signup/first" element={<SignupSecond />}></Route>
        <Route path="/welcome/login" element={<Login />}></Route>
      </Routes>
    </div >
  );
}

export default App;
