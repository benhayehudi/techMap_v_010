import React from 'react';
import { connect } from 'react-redux';
import { updateLikes, showLikes } from '../../actions/LikeActions';


class JobCard extends React.Component {
  constructor(props) {
  super(props)

  this.state = {
    currentJob: '',
    counter: ''
    }
  }

  onClick = () => {
    this.setState({
      currentJob: this.props.job.cacheId,
      counter: this.state.counter + 1
    });
    this.props.updateLikes(this.state.currentJob, this.state.counter);
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
      <button onClick={this.onClick}>Like</button>{this.state.counter}
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

export default connect(mapStateToProps, { showLikes, updateLikes })(JobCard);
