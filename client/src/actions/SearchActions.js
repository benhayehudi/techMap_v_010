import React from 'react';
import JobCard from '../components/containers/JobCard';
import SearchForm from '../components/containers/SearchForm';

export function updateJobs(userInput) {
  console.log(userInput)
  return (dispatch => {

  const request = {
    method: 'post',
    data: JSON.stringify(userInput)
  };

    dispatch({ type: 'START_UPDATING_JOBS'});
    fetch('/api/jobs/search/' + (userInput), request)
      .then(data => data.json())
      .then(data => dispatch({ type: 'UPDATE_JOBS', data: data.items }))
    }
  )}

  export function renderJobCards(response) {
    Object.keys(response).map(job =>
    <JobCard job={job} key={job.cacheId} />
  )

  return (
    <div>
      <SearchForm />
      <h1>Job HListings:</h1>
      {renderJobCards}
    </div>
    );
  }
