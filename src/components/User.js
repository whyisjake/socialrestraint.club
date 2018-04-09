import React from 'react';
import {Col} from 'reactstrap';

export default class User extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Col xs="auto">
        <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg">
          <img className="img-fluid" src={this.props.image} alt={this.props.name} />
          <div className="portfolio-box-caption">
            <div className="portfolio-box-caption-content">
              <div className="project-category text-faded">Pledged {this.props.pledge}</div>
              <div className="project-name">{this.props.name}</div>
            </div>
          </div>
        </a>
      </Col>
    )
  }
}
