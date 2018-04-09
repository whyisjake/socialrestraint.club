import React from 'react';
import { Navbar } from 'reactstrap';

export default class bsNavbar extends React.Component {
  render() {
    return (
      <Navbar expand="lg" light fixed="top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <img src="/img/usc-shield-name-black.png" id="uscLogo" alt="USC" />
          </a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">Take Action</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">The Facts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">Pledge</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    )
  }
}
