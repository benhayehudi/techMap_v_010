import React from 'react';
import { connect } from 'react-redux';
import { addJob } from '../../actions/SearchActions';


class JobCard extends React.Component {
  constructor(props) {
  super(props)

  this.state = {
    title: '',
    link: '',
    snippet: '',
    cacheId: '',
    currentJob: '',
    }
  }

  onClick = () => {
    var cacheId = this.props.job.cacheId
    var link = this.props.job.link
    var title = this.props.job.title
    var snippet = this.props.job.snippet
    this.props.addJob(this.props.job);
  }

  render() {
    return (
  <div>
    <div className={this.props.job.cacheId}>
      <h3><a href={this.props.job.link}>{this.props.job.title}</a></h3>
      <button className="btn btn-primary" onClick={() => this.onClick()} data-cacheId={this.props.job.cacheId} data-link={this.props.job.link} data-title={this.props.job.title} data-snippet={this.props.job.snippet}>Save This Job</button>
      <p>{this.props.job.snippet}</p>
    </div>
  </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    addJob: state.addJob,
    title: state.title,
    link: state.link,
    snippet: state.snippet,
    cacheId: state.cacheId
  })
}

export default connect(mapStateToProps, { addJob })(JobCard);
