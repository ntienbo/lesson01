import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <a className="navbar-brand">Title</a>
        <ul className="nav navbar-nav">
          <li>
            <a>Home</a>
          </li>
          <li  className="active">
            <a>Danh muc san pham</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
