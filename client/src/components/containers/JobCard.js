import React from 'react';
import { connect } from 'react-redux';
import { updateLikes, showLikes } from '../../actions/LikeActions';


class JobCard extends React.Component {
  constructor(props) {
  super(props)

  this.state = {
    counter: ''
    }
  }

  onClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  componentDidMount() {
    this.props.showLikes();
  }

  render() {
    return (
  <div>
    <div className={this.props.job.cacheId}>
      <h3><a href={this.props.job.link}>{this.props.job.title}</a></h3>
      <p>{this.props.job.snippet}</p>
      <br />
      <button onClick={this.onClick}>Like</button>{this.props.counter}
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

export default connect(mapStateToProps)(JobCard);
