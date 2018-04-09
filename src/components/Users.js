import React from 'react';
import User from './User';
import {Container, Row} from 'reactstrap';
import UserList from '../users.json';
import _ from 'lodash';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    const userList = this.props.users;
    this.state = {
      userList
    };
  }
  render() {
    const users = _.chunk(_.shuffle(UserList.results), 12);
    return (
      <Container>
        <section className="p-0" id="portfolio">
          {users.map((users, i) => {
            return (<Row className="no-gutters" key={i}>
              {users.map((user, i) => {
                return <User image={user.picture.large} name={`${user.name.first} ${user.name.last}`} pledge={user.registered} key={i} />
              })}
            </Row>
          )})}
        </section>
      </Container>
    )
  }
}
