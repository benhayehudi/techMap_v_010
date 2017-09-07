import React from 'react';
import { connect } from 'react-redux';
import { updateLikes, showLikes } from '../../actions/LikeActions';


class JobListCard extends React.Component {
  constructor(props) {
  super(props)

  this.state = {
    counter: 0
    }
  }

  onClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
    this.props.updateLikes(this.props.job.cacheId);
  }

  componentDidMount() {
    this.props.showLikes(this.props.job.cacheId);
  }

  render() {
    return (
  <div>
    <div className={this.props.job.cacheId}>
      <h3><a href={this.props.job.link}>{this.props.job.title}</a></h3>
      <p>{this.props.job.snippet}</p>
      <br />
      <button className="btn btn-primary" onClick={this.onClick}>Like</button>{this.state.counter}
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

export default connect(mapStateToProps, { showLikes, updateLikes })(JobListCard);
