import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import JobListCard from './JobListCard';

class JobsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      savedJobs: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/jobslist')
      .then(response => response.json())
      .then(data => this.setState({ savedJobs: data.items }))
    }

  render() {

  const renderJobListCards =
      this.state.savedJobs.map(job =>
        <JobListCard job={job} key={job.cacheId} />)

    return (
      <div>
        <SearchForm />
        <h1>Saved Job Listings:</h1>
        {renderJobListCards}
    </div>
    );
  }
}

export default JobsList;
