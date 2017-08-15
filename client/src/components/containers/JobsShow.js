import React from 'react';
import fetch from 'isomorphic-fetch'
import { createStore } from 'react';

let alljobs =[];

var myRequest = new Request('http://localhost:3001/api/jobs/all');

alljobs = fetch(myRequest).then(function(response) {
response.json()
})

class JobsShow extends React.Component {
  constructor() {
    super();

    this.state = {
      jobs: (alljobs)
    }
  }
  render() {
    return (
      this.state.jobs.map((job, index) => {
        <div>
        <h3>{job.title}</h3>
        </div>
      })
    )
  }
}
export default JobsShow;
