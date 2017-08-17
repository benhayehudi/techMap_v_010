function SearchReducer(state = { jobs: [] }, action) {
  switch (action.type) {
    case 'UPDATE_JOBS':
      return this.setState({ jobs: action.data })
    default:
      return state;
  }
}
export default SearchReducer;
