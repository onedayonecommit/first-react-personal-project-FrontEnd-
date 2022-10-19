import { useDispatch, useSelector } from "react-redux";
import { Route, Router, Routes } from "react-router-dom";
import { Nav, Searchglass } from "./components";
import { Login, Main, Signup } from "./page";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/welcome/signup" element={<Signup />}></Route>
        <Route path="/welcome/login" element={<Login />}></Route>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
