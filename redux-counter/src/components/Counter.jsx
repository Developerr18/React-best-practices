import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "../features/counter/counterSlice";

export default function Counter() {
  // Get state from store
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
