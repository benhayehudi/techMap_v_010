import React from 'react';
import { connect } from 'react-redux';
import UserCard from './JobCard';

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo = []
    }
  }

  const request = new Request('http://localhost:3000/api/user/index', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.jwt}`
    })
  });

  componentDidMount() {
    fetch(request)
      .then(response => response.json())
      .then(data => this.setState({ userInfo: data }))
  }

  render() {

  const renderUserCard =
      this.state.userInfo.map(job =>
        <UserCard user={user} key={user.id} />)

    return (
      <div>
        <h1>Your Profile:</h1>
        {renderUserCard}
    </div>
    );
  }
}


export default UserPage;
