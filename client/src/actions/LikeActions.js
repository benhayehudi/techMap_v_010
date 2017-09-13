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

  fetch('/api/jobs/' + (cacheId), request)
    .then(data => data.json())
    .then(data => dispatch({ type: 'ADD_LIKE', data: data }))
  }
)}

export function getLikes(cacheId) {
  return (dispatch => {

  const request = {
    method: 'get',
    data: JSON.stringify(cacheId)
  };

  dispatch({ type: 'GET_LIKES'});
  fetch('/api/jobs/' + (cacheId), request)
    .then(data => data.json())
    .then(data => dispatch({ type: 'GET_LIKES', data: data.likes }))
  }
)}
