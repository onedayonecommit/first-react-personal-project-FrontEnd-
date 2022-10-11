import { useDispatch, useSelector } from "react-redux";
import { up, down } from "./redux/reducer/Login";

function App() {
  const count = useSelector(state => {
    return state.counter.value
  })
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={() => {
        dispatch(up(2))
      }}>+</button>{count}
      <button onClick={() => {
        dispatch(down(2))
      }}></button>
    </div>
  );
}

export default App;
