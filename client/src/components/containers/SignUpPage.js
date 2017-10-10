import React, {PropTypes} from 'react';
import TextInput from '../TextInput';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sessionActions from '../../actions/SessionActions';

class SignUpPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      credentials: {
        email: '',
        password: ''
      }
    }
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.createNewUser(this.state.credentials);
  }

  componentDidMount() {

  }

  render() {

    return (
      <div>
        <h1>Sign Up:</h1>
        <TextInput
          name="email"
          label="email"
          value={this.state.credentials.email}
          onChange={this.onChange}/>

        <TextInput
          name="password"
          label="password"
          type="password"
          value={this.state.credentials.password}
          onChange={this.onChange}/>

        <input type="submit"
          className="btn btn-primary"
          onClick={this.onSave}/>

        <br /><br />
        <h1>Already have an account?</h1> <h3><a href="/login">Login!</a></h3>
    </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(SignUpPage);
