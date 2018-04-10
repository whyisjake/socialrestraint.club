import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import Privacy from './Pages/Privacy';

// Components
import Nav from './components/Navbar';
import Header from './components/Header';


const App = () => (
  <Router>
    <div>
      <Nav />
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/privacy" component={Privacy} />
    </div>
  </Router>
);

export default App;
