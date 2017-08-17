function SearchReducer(state = { loading: false, jobs: [] }, action) {
  switch (action.type) {
    case 'UPDATE_JOBS':
      return {loading: false, jobs: action.data}
    default:
      return state;
  }
}
export default SearchReducer;
