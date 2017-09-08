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

  const renderJobListCards =
      this.props.savedJobs.length !== 0 ?
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
    savedJobs: state.SearchReducer.savedJobs,
    finishedLoading: state.finishedLoading
  })
}

export default connect(mapStateToProps, { getSavedJobs } )(JobsList);
