import React from 'react';
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
    .then(data => dispatch({ type: 'UPDATE_JOBS', data: data.items }))
  }
)}
