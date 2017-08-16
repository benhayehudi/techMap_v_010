import React from 'react';
import JobsShow from './JobsShow';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.setState = {
      jobs: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3001/api/jobs/search/`)
      .then(response => response.json())
      .then(jobs => this.setState({ jobs, loading: false }))
  }

  render() {
    return (
      <div className="Search">
        <h1>Your Search Results:</h1>
        {this.state.loading ?
          <h2>......</h2>
          :
        <JobsShow jobs={this.state.jobs.items} />
        }
      </div>
    )
  }
}
export default SearchResults;
