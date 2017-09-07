export function addLike(likeData, cacheId) {
  return (dispatch => {

  const request = {
    method: 'post',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(likeData)
  };

  dispatch({ type: 'ADD_LIKE'});
  fetch('/api/jobs/' + (cacheId), request)
    .then(data => data.json())
    .then(response => dispatch({ type: 'ADD_LIKE', counter: response }))
  }
)}
