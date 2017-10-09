export function updateJobs(userInput) {
    return (dispatch => {

        const request = {
            method: 'post',
            data: JSON.stringify(userInput)
        };

        dispatch({ type: 'UPDATE_JOBS' });
        fetch('/api/jobs/search/' + (userInput), request)
            .then(data => data.json())
            .then(data => dispatch({ type: 'UPDATE_JOBS', data: data.items }))
    })
}

export function addJob(jobData) {
    return (dispatch => {
        const request = {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `${sessionStorage.jwt}`
            },
            body: JSON.stringify(jobData)
        };
        dispatch({ type: 'ADD_JOB' });
        fetch('/api/jobs/new/', request)
            .then(data => data.json())
            .then(data => dispatch({ type: 'ADD_JOB', data: data }))
    })
}

export function getSavedJobs() {
    return (dispatch => {
        const request = {
            method: 'GET',
            headers: {
                'Authorization': `${sessionStorage.jwt}`
            }
        };
        fetch('http://localhost:3001/api/jobs/list', request)
            .then(response => response.json())
            .then(data => dispatch({ type: 'GET_SAVED_JOBS', data: data }))
    })
}
