import { useDispatch, useSelector } from "react-redux";
import { Route, Router, Routes } from "react-router-dom";
import { Nav, Searchglass } from "./components";
import { Login } from "./page";

function App() {
  return (
    <div className="App">
      <Nav />
      <Searchglass />
      <Routes>
        <Route path="/welcome/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
