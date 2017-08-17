import React from 'react';
import SearchForm from './SearchForm';
import JobCard from './JobCard';


class JobsShow extends React.Component {
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
      .then(data => this.setState({ jobs: data.items, loading: false }))
  }

  render() {

    const renderJobCards = this.state.jobs.map(job =>
      <JobCard job={job} key={job.cacheId} />
    )
    return (

      <div>
        <SearchForm />
        <h1>Job Listings:</h1>
        {renderJobCards}
    </div>
    );
  }
}
export default JobsShow;
