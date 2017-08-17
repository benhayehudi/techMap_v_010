import React from 'react';
import SearchReducer from '../reducers/SearchReducer';
import JobCard from '../components/containers/JobCard';
import SearchForm from '../components/containers/SearchForm';

export function updateJobs(data) {
  return {
    type: 'UPDATE_JOBS',
    data
  }
}

export function fetchByUserInput() {
  return dispatch => {
    const searchForJobs = params => {
      const request = {
        method: 'post',
        data: JSON.stringify(params)
      };

      fetch(`/api/jobs/search/` + (params), request)
        .then(data => data.json())
        .then(data => dispatch(updateJobs(data)))
      }

    const renderJobCards = this.state.jobs.map(job =>
      <JobCard job={job} key={job.cacheId} />
    )
    return (

      <div>
        <SearchForm searchForJobs={searchForJobs}/>
        <h1>Job Listings:</h1>
        {renderJobCards}
    </div>
    );
  }
}
