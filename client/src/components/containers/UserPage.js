import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import JobCard from './JobCard';

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo = []
    }
  }

  const request = new Request('http://localhost:3000/api/user/index', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.jwt}`
    })
  });

  componentDidMount() {
    fetch(request)
      .then(response => response.json())
      .then(data => this.setState({ userInfo: data }))
  }

  render() {

  const renderUserCard =
      this.state.firstJobs.map(job =>
        <JobCard job={job} key={job.cacheId} />)

    return (
      <div>
        <h1>Your Profile:</h1>
        {renderUserCard}
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
