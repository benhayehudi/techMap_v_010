import React from 'react';

class JobListCard extends React.Component {
  constructor(props) {
    super(props)

    this.setState({
      counter: ''
    })
  }

  onClick = () => {
    var cacheId = this.props.job.cacheId
    var likes = this.props.job.likes++
    var likeData = {cacheId, likes}
    const request = {
      method: 'post',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(likeData)
    };

    fetch('/api/jobs/' + (cacheId), request)
      .then(data => data.json())
      .then(data => this.setState({ counter: data.likes }))
  }

  componentDidMount() {
    const request = {
      method: 'get',
      data: JSON.stringify(this.props.job.cacheId)
    };

    fetch('/api/jobs/' + (this.props.job.cacheId), request)
      .then(data => data.json())
      .then(data => this.setState({ counter: data.likes }))
  }

  render() {
    console.log(this.props)
    return (
  <div className="JobCardBox">
    <div className={this.props.job.cacheId}>
      <h3><a href={this.props.job.link}>{this.props.job.title}</a></h3>
      <p>{this.props.job.snippet}</p>
      <br />
      <button className="btn btn-primary" onClick={this.onClick}>Like</button>&nbsp;<span className="LikeNumber">{this.props.job.likes}</span>
    </div>
    <br />
  </div>
    );
  }
}

export default JobListCard;
