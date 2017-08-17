function SearchReducer(state = { loading: false, jobs: [] }, action) {
  switch (action.type) {
    case 'UPDATE_JOBS':
      return {loading: false, jobs: action.payload}
    default:
      return state;
  }
}
export default SearchReducer;
