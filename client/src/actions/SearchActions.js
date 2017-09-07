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

export function addJob(cacheId) {
  return (dispatch => {
    const request = {
      method: 'post',
      cacheId: cacheId,
      title: this.props.job.title,
      link: this.props.job.link,
      snippet: this.props.job.snippet
    };
    dispatch({ type: 'ADD_JOB' });
    fetch('/api/jobs/new/', request)
      .then(data => data.json())
      .then(data => dispatch({ type: 'ADD_JOB' }))
  }
)}
