export function updateLikes(counter) {
  return (dispatch => {

  const request = {
    method: 'post',
    data: JSON.stringify(counter)
  };

  dispatch({ type: 'UPDATE_LIKES'}); //build out loading or remove
  fetch('/api/jobs/likes/' + (this.props.counter), request)
    .then(data => data.json())
    .then(response => dispatch({ type: 'UPDATE_LIKES', counter: response.likes }))
  }
)}

export function showLikes(jobId) {
  return (dispatch => {

    const request = {
      method: 'post',
      data: JSON.stringify
    };

    const setInitialLikes = likes => {
      return {
        type: 'GET_LIKES',
          likes
      }
    }

    dispatch({ type: 'GET_LIKES'});
    fetch('/api/jobs/likes/' + (jobId), request)
      .then(data => data.json())
      .then(response => dispatch(setInitialLikes(response)))
  }
)}
