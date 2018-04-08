import React from 'react';
// import { Header } from 'reactstrap';

export default class bsHeader extends React.Component {
  render() {
    return (
      <header className="masthead text-center text-white d-flex">
        <div className="container my-auto">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h1 className="text-uppercase"><strong>The Social Restraint Club</strong></h1>
              <hr />
            </div>
            <div className="col-lg-8 mx-auto">
              <p className="text-faded mb-5">Take the pledge to spend less time online.</p>
              <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
