import React from 'react';
// import SearchReducer from '../reducers/SearchReducer';
import JobCard from '../components/containers/JobCard';
import SearchForm from '../components/containers/SearchForm';

export function updateJobs(userInput) {
  return (dispatch => {

  const request = {
    method: 'post',
    data: JSON.stringify(userInput)
  };

    dispatch({ type: 'START_UPDATING_JOBS'});
    fetch('/api/jobs/search/' + (userInput), request)
      .then(data => data.json())
      .then(data => dispatch({ type: 'UPDATE_JOBS', payload: data.items }));
    })

  const renderJobCards = this.state.jobs.map(job =>
    <JobCard job={job} key={job.cacheId} />
  )
  return (
    <div>
      <SearchForm />
      <h1>Job Listings:</h1>
      {renderJobCards}
    </div>
  );
}
