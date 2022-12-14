const initialState = {
  list: ['Movies', 'Music', 'Books', 'Footballs'],
}

const hobbyReducer = (state = initialState, action : any) => {
  switch (action.type) {
    case 'ADD_HOBBY': {
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
      }
    }
    default:
      return state;
  }
};

export default hobbyReducer