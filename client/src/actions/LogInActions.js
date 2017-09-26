export function logInUser() {
  return (dispatch => {
    fetch('http://localhost:3001/api/jobs/list')
      .then(response => response.json())
      .then(data => dispatch({ type: 'GET_SAVED_JOBS', data: data }))
    }
  )}
