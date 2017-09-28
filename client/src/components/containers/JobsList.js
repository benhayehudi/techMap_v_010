import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import JobListCard from './JobListCard';
import { getSavedJobs } from '../../actions/SearchActions';

class JobsList extends React.Component {

        componentDidMount() {
            this.props.getSavedJobs();
        }

        render() {
            var sortedJobs = this.props.savedJobs && this.props.logged_in ?
                this.props.savedJobs.sort(function(job1, job2) {
                    return job2.likes - job1.likes
                }) :
                null
            const renderJobListCards =
                this.props.savedJobs && this.props.logged_in ?
                sortedJobs.map(job =>
                    <
                    JobListCard job = { job }
                    key = { job.cacheId }
                    />):
                    "Loading... (If you are seeing this for more than a few seconds you are not logged in.)"
                    return ( <
                        div >
                        <
                        SearchForm / >
                        <
                        h1 > Saved Job Listings: < /h1> { renderJobListCards } < /
                        div >
                    );
                }
        }
        const mapStateToProps = (state) => {
            return ({
                savedJobs: state.savedJobs,
                finishedLoading: state.finishedLoading,
                logged_in: state.session
            })
        }

        export default connect(mapStateToProps, { getSavedJobs })(JobsList);