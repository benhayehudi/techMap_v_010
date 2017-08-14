import React, { Component } from 'react';
import {FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar.js';
import NavbarContainer from './components/containers/NavbarContainer';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';



class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <NavbarContainer />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
