import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import JobListCard from './JobListCard';
import { getSavedJobs } from '../../actions/SearchActions';

class JobsList extends React.Component {

  componentDidMount() {
    this.props.getSavedJobs();
  }

  render() {
    console.log(this.props.savedJobs)
  const renderJobListCards =
      this.props.finishedLoading ?
        this.props.savedJobs.map(job =>
          <JobListCard job={job} key={job.cacheId} />)
      :
        "Loading..."
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
    savedJobs: state.savedJobs,
    finishedLoading: state.finishedLoading
  })
}

export default connect(mapStateToProps, { getSavedJobs } )(JobsList);
