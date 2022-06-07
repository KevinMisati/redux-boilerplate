import './App.css';
import {useSelector,useDispatch} from"react-redux"
import {increment,decrement,reset,incrementByAmount} from "./features/counter/counterSlice"


function App() {
const count = useSelector(state => state.counter.count)
const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Hello world</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+3</button>
    </div>
  );
}

export default App;
