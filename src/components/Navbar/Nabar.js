import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <ul className="nav navbar-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">about us</a></li>
              <li><a href="/calendar">calendar</a></li>
              <li><a href="/contact-us">contact us</a></li>
            </ul>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    );
  }
}

export default NavBar;






