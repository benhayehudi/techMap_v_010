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

  onClick = event => {
    const { title, link, snippet, cacheId } = event.target;
    const currentJobData = Object.assign({}, this.props.job, {
      [title]: this.dataset.title,
      [link]: this.dataset.link,
      [snippet]: this.dataset.snippet,
      [cacheId]: this.dataset.cacheId
    })
    this.props.addJob(currentJobData);
  }

  render() {
    return (
  <div>
    <div className={this.props.job.cacheId}>
      <h3><a href={this.props.job.link}>{this.props.job.title}</a></h3>
      <p>{this.props.job.snippet}</p>
      <br />
      <button onClick={this.onClick} data-cacheId={this.props.job.cacheId} data-link={this.props.job.link} data-title={this.props.job.title} data-snippet={this.props.job.snippet}>Add To List</button>
    </div>
  </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    counter: state.counter,
    addJob: state.addJob
  })
}

export default connect(mapStateToProps, { addJob })(JobCard);
