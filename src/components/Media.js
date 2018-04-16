import React from "react";
// import { Header } from 'reactstrap';

export default class bsHeader extends React.Component {
  render() {
    return (
      <section id="media" className="bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-white">Media</h2>
              <hr className="light my-4" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 text-center">
              <iframe
                title="depression"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/m-tla6HlZ0I?rel=0&amp;controls=0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
            <div className="col-lg-6 col-md-6 text-center">
              <iframe
                title="kristin-bell"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/k_m5AlsQqcs?rel=0&amp;controls=0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 text-center">
              <iframe
                title="Phone Addiction"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/0Jv3V5uYjNs?rel=0&amp;controls=0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
            <div className="col-lg-6 col-md-6 text-center">
              <iframe
                title="Empty Seat"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OT8lw1Rl-WM?rel=0&amp;controls=0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
