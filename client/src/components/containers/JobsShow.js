import React from 'react';
import JobCard from './JobCard';
import SearchForm from './SearchForm';
import searchForJobs from './SearchForJobs';


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
      <JobCard job={job} />
    )
    return (

      <div>
        <SearchForm searchForJobs={searchForJobs}/>
        {renderJobCards}
    </div>
    );
  }
}
export default JobsShow;
