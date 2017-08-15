import React from 'react';
import fetch from 'isomorphic-fetch'

const JobsShow = (props) => (
  <div>
    {props.jobs.map(job =>
      <div className="job-listing">
        <h3><a href={job.link}>{job.title}</a></h3>
      </div>
    )}
  </div>
);
export default JobsShow;
