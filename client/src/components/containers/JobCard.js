import React from 'react';

const JobCard = ({ job }) => (
  <div>
    <div className={job.cacheId}>
      <h3><a href={job.link}>{job.title}</a></h3>
      <p>{job.snippet}</p>
    </div>
  </div>
);

export default JobCard;
