import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
import Nav from './components/Navbar';
import Header from './components/Header';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
      </div>
    );
  }
}
