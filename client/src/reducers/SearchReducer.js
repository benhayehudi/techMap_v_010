let initialState = {
  jobs: []
}

function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_JOBS':
      return Object.assign({}, state, {
        jobs: action.data })
    default:
      return state;
  }
}
export default SearchReducer;
