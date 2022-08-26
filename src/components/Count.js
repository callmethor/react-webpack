import { useSelector, useDispatch } from "react-redux";

import { increase, decrease } from "../redux/actions/Counter";

import React from 'react'

function Count() {
  const count = useSelector(state => state.counter.counter)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increase())}>increase</button>
      <button onClick={() => dispatch(decrease())}>decrease</button>

    </div>

  )
}

export default Count