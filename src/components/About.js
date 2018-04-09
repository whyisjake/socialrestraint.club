import React from 'react';
import {Button} from 'reactstrap';

export default class User extends React.Component {
  render() {
    return (
      <section className="bg-primary" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="section-heading text-white">Take Back Your Time</h2>
              <hr className="light my-4" />
              <p className="text-faded mb-4">Join us in taking back your time, calling on social media companies to be more responsible, and using social media in a positive way.</p>
              <p className="text-faded mb-4">Join your friends in spending less time on social media?</p>
              <Button className="btn btn-light btn-lg js-scroll-trigger" id="loginButton">Take the pledge!</Button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
