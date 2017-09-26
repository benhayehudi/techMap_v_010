import React from 'react';
import { connect } from 'react-redux';
import { logInUser } from '../../actions/LogInActions';

class LogInPage extends React.Component {

  componentDidMount() {

  }

  render() {

    return (
      <div>
        <h1>Login:</h1>
        
    </div>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
    savedJobs: state.savedJobs,
    finishedLoading: state.finishedLoading
  })
}

export default connect(mapStateToProps, { logInUser } )(LogInPage);
