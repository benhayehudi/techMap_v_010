import React from 'react';

class UserCard extends React.Component {

  render() {
    console.log("HELLO!!")
    return (
  <div className="UserCardBox">
    <div className={this.props.user.id}>
      <h3>{this.props.user.email}</h3>
      <button className="btn btn-primary">Log Out</button>
      <br />
    </div>
  </div>
    );
  }
}

export default UserCard;
