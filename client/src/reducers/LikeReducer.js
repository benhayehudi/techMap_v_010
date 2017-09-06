let initialState = {
  counter: 0,
  jobId: ''
}

function LikeReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_LIKES':
      return Object.assign({}, state, {
        counter: action.response + 1
      })

    case 'GET_LIKES':
      return state;

    default:
      return state;
  }
}

export default LikeReducer;
