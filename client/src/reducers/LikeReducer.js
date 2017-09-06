let initialState = {
  counter: 0,
  jobId: ''
}

function LikeReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_LIKES':
      return Object.assign({}, state, {
        jobs: action.data,
        searchExecuted: true
      })

    case 'GET_LIKES':
      return state;

    default:
      return state;
  }
}

export default LikeReducer;
