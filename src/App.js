import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
import Nav from './components/Navbar';
import Header from './components/Header';
import Users from './components/Users';
import UserList from './users.json';

export default class SocialRestraint extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Users users={UserList} />
      </div>
    );
  }
}
