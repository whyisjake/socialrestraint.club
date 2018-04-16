import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Navbar } from "reactstrap";

export default class bsNavbar extends React.Component {
  render() {
    return (
      <Navbar expand="lg" light fixed="top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <img src="/img/usc-shield-name-black.png" id="uscLogo" alt="USC" />
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/#mainNav">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/#pledge">
                  Take Action
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/#facts">
                  The Facts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/#media">
                  Media
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/privacy">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    );
  }
}
