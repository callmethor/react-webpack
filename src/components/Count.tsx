import { useSelector, useDispatch } from "react-redux";

import React from "react";
import { decrease, increase } from "../redux/actions/Counter";

function Count() {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.counter);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increase())}>increase</button>
      <button onClick={() => dispatch(decrease())}>decrease</button>
    </div>
  );
}

export default Count;
