import React from 'react';
import JobsShow from './JobsShow';

const JobCard = (props) => (
  <div>
    <div className={props.job.key}>
      <h3><a href={props.job.link}>{props.job.title}</a></h3>
      <p>{props.job.snippet}</p>
    </div>
  </div>
);
export default JobCard;
