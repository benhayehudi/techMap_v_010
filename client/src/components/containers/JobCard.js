import React from 'react';
import { connect } from 'react-redux';
import { addJob } from '../../actions/SearchActions';


class JobCard extends React.Component {
  constructor(props) {
  super(props)

  this.state = {
    currentJob: '',
    counter: ''
    }
  }

  onClick = () => {
    this.props.addJob(this.props.job.cacheId, this.props.job.link, this.props.job.title, this.props.job.snippet);
  }

  render() {
    return (
  <div>
    <div className={this.props.job.cacheId}>
      <h3><a href={this.props.job.link}>{this.props.job.title}</a></h3>
      <p>{this.props.job.snippet}</p>
      <br />
      <button onClick={this.onClick}>Add To List</button>
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

export default connect(mapStateToProps, { addJob })(JobCard);
