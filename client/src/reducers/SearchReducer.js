import { browserHistory } from 'react-router';

let initialState = {
    jobs: [],
    savedJobs: [],
    finishedLoading: false,
    searchExecuted: false,
    session: false,
    userInfo: [],
    jobDeleted: false
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
                finishedLoading: true,
                session: true
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
        case 'DELETE_JOB':
        return Object.assign({}, state, {
            jobDeleted: true
        })
        case 'LOG_IN_SUCCESS':
            return Object.assign({}, state, {
                session: true,
                userInfo: action.data.email
            })
        case 'NEW_USER_SUCCESS':
            return Object.assign({}, state, {
                session: true,
                userInfo: action.data.email
            })
        case 'LOG_OUT':
            browserHistory.push('/')
            return !!sessionStorage.jwt
        default:
            return state;
    }
}

export default SearchReducer;
