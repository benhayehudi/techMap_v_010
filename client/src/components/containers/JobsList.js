import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import JobListCard from './JobListCard';

class JobsList extends React.Component {

  render() {

  const renderJobListCards =
      this.props.jobs.map(job =>
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

const mapStateToProps = (state) => {
  return ({
    jobs: state.jobs
  })
}

export default connect(mapStateToProps)(JobsList);
