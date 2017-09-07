export function updateJobs(userInput) {
  return (dispatch => {

  const request = {
    method: 'post',
    data: JSON.stringify(userInput)
  };

  dispatch({ type: 'UPDATE_JOBS'});
  fetch('/api/jobs/search/' + (userInput), request)
    .then(data => data.json())
    .then(data => dispatch({ type: 'UPDATE_JOBS', data: data.items }))
  }
)}

export function addJob(jobData) {
  return (dispatch => {
    const request = {
      method: 'post',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobData)
    };
    dispatch({ type: 'ADD_JOB' });
    fetch('/api/jobs/new/', request)
      .then(data => data.json())
      .then(data => dispatch({ type: 'ADD_JOB', data: data }))
  }
)}
