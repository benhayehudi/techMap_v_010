let initialState = {
  jobs: [],
  searchExecuted: false
}

function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_JOBS':
      return Object.assign({}, state, {
        jobs: action.data,
        searchExecuted: true
      })
    default:
      return state;
  }
}
export default SearchReducer;
