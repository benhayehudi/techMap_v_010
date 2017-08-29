import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import navbarInstance from './components/NavBar';
import JobsShow from './components/containers/JobsShow';

const ReactRouter = () => (
  <Router>
    <div className="Routes">
      <Switch>
        <Route exact path="/" component={JobsShow}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    </div>
  </Router>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          { navbarInstance }
          { Header }
        </div>
        <br /><br />
        <ReactRouter />
        <div className="footer">
          { Footer }
        </div>
    </div>
    );
  }
}

export default App;
