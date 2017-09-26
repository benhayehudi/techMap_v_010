import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch, Redirect
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import NavbarInstance from './components/NavBar';
import JobsShow from './components/containers/JobsShow';
import JobsList from './components/containers/JobsList';
import LogInPage from './components/containers/LogInPage';

const ReactRouter = () => (
  <Router>
    <div className="Routes">
      <div className="App-header">
        {NavbarInstance}
        {Header}
      </div>
      <Switch>
        <Route exact path="/" component={JobsShow}/>
        <Route exact path="/login" component={LogInPage}/>
        <Route exact path="/jobslist" render={() => (
          (!sessionStorage.jwt) ? (
            <Redirect to="/login"/>
          ) : (
            {JobsList}
          )
        )}/>
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
        <br /><br />
        < ReactRouter />
        <div className="footer">
          { Footer }
        </div>
    </div>
    );
  }
}

export default App;
