import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import JobCard from './JobCard';
import { Link } from 'react-router-dom'

class JobsShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstJobs: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/jobs')
      .then(response => response.json())
      .then(data => this.setState({ firstJobs: data.items }))
  }

  render() {

  const renderJobCards =
    this.props.searchExecuted ?
      this.props.jobs.map(job =>
        <JobCard job={job} key={job.cacheId} />)
      :
      this.state.firstJobs.map(job =>
        <JobCard job={job} key={job.cacheId} />)

    return (
      <div>
        <SearchForm />
        <Link to="/about">About</Link>
        <h1>Job Listings:</h1>
        {renderJobCards}
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    jobs: state.jobs,
    searchExecuted: state.searchExecuted
  })
}

export default connect(mapStateToProps)(JobsShow);
