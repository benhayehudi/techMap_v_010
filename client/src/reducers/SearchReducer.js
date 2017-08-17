function SearchReducer(state = { jobs: [] }, action) {
  switch (action.type) {
    case 'UPDATE_JOBS':
      return action.updateJobs;
    default:
      return state;
  }
}
export default SearchReducer;
