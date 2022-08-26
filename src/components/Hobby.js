import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addHobby } from '../redux/actions/Hobby';


const Hobby = () => {
  const listHobby = useSelector(state => state.hobby.list)
  const dispatch = useDispatch();
  const [inputValue, setInPutValue] = useState();

  console.log('hobby', listHobby);
  console.log('log inputValue', inputValue);

  return (
    <div>
      <h1>hooby: </h1>
      <input type="text" onChange={(e) => setInPutValue(e.target.value) }></input>
      <button onClick={() => dispatch(addHobby(inputValue))}>add</button>
    </div>
  )
}

export default Hobby