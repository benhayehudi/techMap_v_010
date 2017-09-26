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
    var sortedJobs = this.props.savedJobs ?
       this.props.savedJobs.sort(function(job1, job2) {
        return job2.likes - job1.likes
      })
      :
      null
  const renderJobListCards =
      this.props.savedJobs ?
        sortedJobs.map(job =>
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
