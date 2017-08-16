import React from 'react';
import fetch from 'isomorphic-fetch'

const SearchResults = (props) => (
  <div>
    {props.jobs.map(job =>
      <div className={job.cacheId}>
        <h3><a href={job.link}>{job.title}</a></h3>
        <p>{job.snippet}</p>
      </div>
    )}
  </div>
);
export default SearchResults;
