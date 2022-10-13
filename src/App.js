import { useDispatch, useSelector } from "react-redux";
import Nav from "./components/Nav/Nav";
import { ageup } from "./redux/reducer/Age";
import { up, down } from "./redux/reducer/Login";


function App() {
  const count = useSelector(state => {
    return state.counter.value
  })
  const age = useSelector(state => { return state.age.value })
  const dispatch = useDispatch()
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
