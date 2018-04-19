import React from "react";
import { Col } from "reactstrap";
import moment from "moment";
import _ from "lodash";

export default class User extends React.Component {
  render() {
    const time = moment(this.props.pledge, "YYYYMMDD").fromNow();
    const number = _.random(1, 100000);
    const hash = `#${_.toString(number)}`;
    return (
      <Col xs="4" lg="1">
        <a id={number} className="portfolio-box" href={hash}>
          <img
            className="img-fluid"
            src={this.props.image}
            alt={this.props.name}
          />
          <div className="portfolio-box-caption">
            <div className="portfolio-box-caption-content">
              <div className="project-category text-faded">Pledged {time}</div>
              <div className="project-name">{this.props.name}</div>
            </div>
          </div>
        </a>
      </Col>
    );
  }
}
