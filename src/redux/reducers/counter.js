const initialState = {
  counter: 0,
}

const counterReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {...state, counter: state.counter + 1 }
      break;
    case 'DECREASE':
      return {...state, counter: state.counter - 1}
      break;
    default:
      return state
      break;
  }
}

export default counterReducers;