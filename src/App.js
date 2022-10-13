import { useDispatch, useSelector } from "react-redux";
import { Nav, Searchglass } from "./components";

function App() {
  return (
    <div className="App">
      <Nav />
      <Searchglass />
    </div>
  );
}

export default App;
