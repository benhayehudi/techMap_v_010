import React from 'react';
import { connect } from 'react-redux';
import { addLike } from '../../actions/LikeActions';


class JobListCard extends React.Component {
  constructor(props) {
  super(props)

  this.state = {
    counter: this.props.job.likes
    }
  }

  onClick = () => {
    var likes = this.props.job.likes + 1
    var cacheId = this.props.job.cacheId
    var likeData = {cacheId, likes}
    this.props.addLike(likeData, cacheId);
  }

  render() {
    return (
  <div>
    <div className={this.props.job.cacheId}>
      <h3><a href={this.props.job.link}>{this.props.job.title}</a></h3>
      <p>{this.props.job.snippet}</p>
      <br />
      <button className="btn btn-primary" onClick={this.onClick}>Like</button>{this.props.job.likes}
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

export default connect(mapStateToProps, { addLike })(JobListCard);
