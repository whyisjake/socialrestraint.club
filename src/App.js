import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
import Pledge from './components/Pledge';
import Nav from './components/Navbar';
import Header from './components/Header';
import Users from './components/Users';
import Services from './components/Services';
import UserList from './users.json';


export default class SocialRestraint extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Pledge />
        <Users users={UserList} />
        <Services />
      </div>
    );
  }
}
