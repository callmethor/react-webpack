import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addHobby } from '../redux/actions/Hobby';


const Hobby = () => {
  const dispatch = useDispatch();
  const listHobby = useSelector((state: any) => state.hobby.list)
  const [inputValue, setInPutValue] = useState<any>()

  console.log('hobby', listHobby);

  return (
    <div>
      <h1>hooby: {listHobby.map((h: string) => <span>,{h} </span>)} </h1>
      <input type="text" onChange={(e) => setInPutValue(e.target.value) }></input>
      <button onClick={() => dispatch(addHobby(inputValue))}>add</button>
    </div>
  )
}

export default Hobby