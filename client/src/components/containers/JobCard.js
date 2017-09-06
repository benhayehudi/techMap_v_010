import React from 'react';
import { connect } from 'react-redux';
import { addJob } from '../../actions/SearchActions';


class JobCard extends React.Component {
  constructor(props) {
  super(props)

  this.state = {
    currentJob: '',
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
      <button className="btn btn-primary" onClick={this.onClick} data-cacheId={this.props.job.cacheId} data-link={this.props.job.link} data-title={this.props.job.title} data-snippet={this.props.job.snippet}>Save This Job</button>
      <p>{this.props.job.snippet}</p>
    </div>
  </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    addJob: state.addJob
  })
}

export default connect(mapStateToProps, { addJob })(JobCard);
