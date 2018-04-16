import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class bsHeader extends React.Component {
  render() {
    return (
      <header className="masthead text-center text-white d-flex">
        <div className="container my-auto">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h1 className="text-uppercase">
                <strong>The Social Restraint Club</strong>
              </h1>
              <hr />
            </div>
            <div className="col-lg-8 mx-auto">
              <p className="text-faded mb-5">
                Don't bookend your day with social media.<br />Take the pledge
                to spend less time online.
              </p>
              <Link
                className="btn btn-primary btn-xl js-scroll-trigger"
                href="#pledge"
              >
                Find Out More
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
