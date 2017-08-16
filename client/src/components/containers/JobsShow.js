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

    const searchForJobs = params => {
      const request = {
        method: 'post',
        data: JSON.stringify(params)
      };

      fetch(`/api/jobs/search/` + (params), request)
        .then(data => data.json())
        .then(data => this.setState({ jobs: data.items }))
      }

    const renderJobCards = this.state.jobs.map((job, key) =>
      <JobCard job={job} key={key} />
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
