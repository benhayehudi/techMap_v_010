const searchForJobs = params => {
  const request = {
    method: 'post',
    // data: JSON.stringify(params)
  };

  fetch(`/api/jobs/search`, request)
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

export default searchForJobs;
