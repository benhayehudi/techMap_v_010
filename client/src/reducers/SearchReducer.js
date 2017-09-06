let initialState = {
  title: '',
  snippet: '',
  link: '',
  cacheId: '',
  likes: 0,
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
    case 'ADD_JOB':
      return state.concat(action.job)
    default:
      return state;
  }
}

export default SearchReducer;
