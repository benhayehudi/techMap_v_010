import React, { Component } from 'react';
import JobsShow from './JobsShow';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/jobs')
      .then(response => response.json())
      .then(jobs => this.setState({ jobs, loading: false }))
  }
  render() {
    return (

      <div className="Jobs">
        <h1>Live Listings for NYC:</h1>
        <br/>
        {this.state.loading ?
          <h2>......</h2>
          :
          <JobsShow jobs={this.state.jobs.items} />
        }
      </div>
    );
  }
}
export default Home;
