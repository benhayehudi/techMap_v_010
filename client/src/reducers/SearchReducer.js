import { browserHistory } from 'react-router';

let initialState = {
    jobs: [],
    savedJobs: [],
    finishedLoading: false,
    searchExecuted: false,
    session: false
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
                searchExecuted: true
            })
        case 'GET_SAVED_JOBS':
            return Object.assign({}, state, {
                savedJobs: action.data,
                finishedLoading: true
            })
        case 'ADD_LIKE':
            var newJobsState = state.savedJobs.map(job => {
                if (job.cacheId === action.data.cacheId) {
                    return action.data
                } else {
                    return job
                }
            })
            return Object.assign({}, state, {
                savedJobs: newJobsState
            });
        case 'LOG_IN_SUCCESS':
            alert("Welcome back!")
            return Object.assign({}, state, {
                session: true
            })
        case 'LOG_OUT':
            browserHistory.push('/')
            return !!sessionStorage.jwt
        default:
            return state;
    }
}

export default SearchReducer;