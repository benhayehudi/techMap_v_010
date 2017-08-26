import React from 'react';
import { connect } from 'react-redux';
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

    const renderJobCards = this.props.jobs.map(job =>
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
const mapStateToProps = (state) => {
  return ({
    jobs: state.jobs
  })
}

export default connect(mapStateToProps)(JobsShow);
