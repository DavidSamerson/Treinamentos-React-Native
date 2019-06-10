import React, { Component } from 'react';

class User extends Component {
  render () {
    return(
    <div className="User">
        <p>Nome: {this.props.name}</p>
        <p>Foto: <img src={this.props.photo} /> </p>
    </div>
    );

  }

}

export default User;