import React from 'react';

const SearchResults = (props) => (
  <div className="JobSearch">
    <h1>Your Search Results:</h1>
    {props.jobs.map(job =>
      <div className={job.cacheId}>
        <h3><a href={job.link}>{job.title}</a></h3>
        <p>{job.snippet}</p>
      </div>
    )}
  </div>
);
export default SearchResults;
