import React from 'react';

class UserCard extends React.Component {
  constructor(props) {
  super(props)

  this.state = {

    }
  }

  render() {
    return (
  <div className="UserCardBox">
    <div className={this.props.user.id}>
      <h3>{this.props.user.email}</h3>

    </div>
  </div>
    );
  }
}

export default UserCard;
