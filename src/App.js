import './App.css';
import {useSelector,useDispatch} from"react-redux"
import {increment,decrement,increment5} from "./actions"

function App() {
  const count = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)

  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Hello world</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment5(5))}>+5</button>
      {isLogged && <h2>Valuable information</h2>}
    </div>
  );
}

export default App;
