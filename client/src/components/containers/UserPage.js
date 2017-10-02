import React from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {}
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/user/index', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.jwt}`,
        'email': this.props.userInfo
      })
    })
      .then(response => response.json())
      .then(data => this.setState({ userData: data }))
  }

  render() {

    return (
      <div>
        <h1>Your Profile</h1>
        { this.state.userData ?
        <UserCard user={this.state.userData} key={this.state.userData.id} /> : <p>Don't see anything? You are probably not logged on.</p> }
    </div>
    );
  }
}

const mapStateToProps = (state) => {
    return ({
        userInfo: state.userInfo
    })
}

export default connect(mapStateToProps)(UserPage);
