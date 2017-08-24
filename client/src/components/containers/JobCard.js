import React from 'react';

const JobCard = (props) => (
  <div>
    <div className={props.job.cacheId}>
      <h3><a href={props.job.link}>{props.job.title}</a></h3>
      <p>{props.job.snippet}</p>
    </div>
  </div>
);
export default JobCard;
