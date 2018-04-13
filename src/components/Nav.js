import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Nav extends Component {

  render() {
    return (
      <div>
        <ul className="nav navbar-nav">
          <li><Link to="/dashboard">Food Jokes</Link></li>
          <li><Link to="/celebrity-jokes">Celebrity Jokes</Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/login"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="/signup"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
      </div>
    );
  }
}

export default Nav;