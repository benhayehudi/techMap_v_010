let initialState = {
  title: '',
  snippet: '',
  link: '',
  cacheId: '',
  jobs: [],
  savedJobs: [],
  finishedLoading: false,
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
      return Object.assign({}, state, {
        title: action.data,
        snippet: action.data,
        link: action.data,
        cacheId: action.data,
        searchExecuted: true
      })
    case 'GET_SAVED_JOBS':
      return Object.assign({}, state, {
        savedJobs: action.data,
        finishedLoading: true
      })
    default:
      return state;
  }
}

export default SearchReducer;
