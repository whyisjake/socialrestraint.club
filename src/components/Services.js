import React from 'react';
// import { Header } from 'reactstrap';

export default class bsHeader extends React.Component {
  render() {
    return (
      <section id="facts">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">The Facts</h2>
              <hr className="my-4" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box mt-5 mx-auto">
                <i className="fa fa-4x fa-address-book text-primary mb-3 sr-icons"></i>
                <h3 className="mb-3">Fake Accounts</h3>
                <p className="text-muted mb-0">Fake accounts that purport to be real people can produce as many as 1,000 social media posts a day.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box mt-5 mx-auto">
                <i className="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
                <h3 className="mb-3">Trolls</h3>
                <p className="text-muted mb-0">Russian "troll farm" with close ties to the Kremlin spent around $100,000 on ads ahead of the 2016 US election and produced thousands of organic posts that spread across Facebook and Instagram </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box mt-5 mx-auto">
                <i className="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i>
                <h3 className="mb-3">Instant Gratification</h3>
                <p className="text-muted mb-0">Facebook takes advantage of your desire for instant gratification.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box mt-5 mx-auto">
                <i className="fa fa-4x fa-eye text-primary mb-3 sr-icons"></i>
                <h3 className="mb-3">Sleep Deprivation</h3>
                <p className="text-muted mb-0">Our chronic sleep deprivation is linked to these devices being allowed in our sleep space</p>
              </div>
            </div>
          </div>
        </div>
    </section>
    )
  }
}
