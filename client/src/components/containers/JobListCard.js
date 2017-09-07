import React from 'react';
import { connect } from 'react-redux';
import { getLikes, addLike } from '../../actions/LikeActions';

class JobListCard extends React.Component {

  onClick = () => {
    var likes = this.props.job.likes + 1
    var cacheId = this.props.job.cacheId
    var likeData = {cacheId, likes}
    this.props.addLike(likeData, cacheId);
  }

  componentDidMount() {
    var cacheId = this.props.job.cacheId
    this.props.getLikes(cacheId);
  }

  render() {
    return (
  <div>
    <div className={this.props.job.cacheId}>
      <h3><a href={this.props.job.link}>{this.props.job.title}</a></h3>
      <p>{this.props.job.snippet}</p>
      <br />
      <button className="btn btn-primary" onClick={this.onClick}>Like</button>{this.props.counter}
    </div>
  </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    counter: state.counter
  })
}

export default connect(mapStateToProps, { getLikes, addLike })(JobListCard);
