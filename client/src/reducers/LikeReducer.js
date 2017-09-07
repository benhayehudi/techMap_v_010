function LikeReducer(state = {
  counter: []
  }, action) {
  switch (action.type) {
    case 'ADD_LIKE':
      return Object.assign({}, state, {
        counter: action.data,
      })
    case 'GET_LIKES':
      return Object.assign({}, state, {
        counter: action.data,
      })
    default:
      return state;
  }
}

export default LikeReducer;
