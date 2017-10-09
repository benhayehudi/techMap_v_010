import React from 'react';
import { connect } from 'react-redux';
import { addLike, deleteJob } from '../../actions/LikeActions';
import { getSavedJobs } from '../../actions/SearchActions';


class JobListCard extends React.Component {
  constructor(props) {
    super(props)

    this.setState({
      counter: ''
    })
  }

  onClick = () => {
    var cacheId = this.props.job.cacheId
    var likes = this.props.job.likes + 1
    var likeData = {cacheId, likes}

    this.props.addLike(likeData, cacheId);
  }

  deleteJob = () => {
    var cacheId = this.props.job.cacheId

    this.props.deleteJob(cacheId);
    this.props.getSavedJobs
  }

  componentDidMount() {
    const request = {
      method: 'get',
      data: JSON.stringify(this.props.job.cacheId)
    };

    fetch('/api/jobs/' + (this.props.job.cacheId), request)
      .then(data => {

        return data.json()
      })
      .then(data => {
        console.log(data)
        this.setState({ counter: data.likes })
      })
  }

  render() {

    return (
  <div className="JobCardBox">
    <div className={this.props.job.cacheId}>
      <h3><a href={this.props.job.link}>{this.props.job.title}</a></h3>
      <p>{this.props.job.snippet}</p>
      <br />
      <button className="btn btn-primary" onClick={this.onClick}>Like</button>&nbsp;<span className="LikeNumber">{this.props.job.likes}</span>
      <button className="btn btn-primary" onClick={this.deleteJob}>Delete</button>
    </div>
    <br />
  </div>
    );
  }
}


export default connect(null, { addLike, deleteJob })(JobListCard);
