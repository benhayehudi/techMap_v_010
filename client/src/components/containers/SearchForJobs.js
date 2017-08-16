const searchForJobs = params => {
  const request = {
    method: 'get',
    data: JSON.stringify(params)
  };

  fetch(`/api/jobs/search`, request)
    .then(jobs => this.setState({ jobs }))
    .catch(err => console.log(err))
}
export default searchForJobs;
