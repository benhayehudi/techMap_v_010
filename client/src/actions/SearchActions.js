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

export function addJob(cacheId, title, link, snippet) {

  return (dispatch => {
    const request = {
      method: 'post',
      data: JSON.stringify(cacheId, title, link, snippet)
    };

    dispatch({ type: 'ADD_JOB' });
    fetch('/api/jobs/new/' + (cacheId), request)
      .then(data => data.json())
      .then(data => dispatch({ type: 'ADD_JOB', title: data.title, link: data.link, snippet: data.snippet, cacheId: data.cacheId }))
  }
)}
