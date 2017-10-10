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
import NavbarInstance from './components/NavBar';
import JobsShow from './components/containers/JobsShow';
import JobsList from './components/containers/JobsList';
import LogInPage from './components/containers/LogInPage';
import SignUpPage from './components/containers/SignUpPage';
import UserPage from './components/containers/UserPage';

const ReactRouter = () => (
  <Router>
    <div className="Routes">
      <div className="App-header">
        <NavbarInstance/>
        {Header}
      </div>
      <Switch>
        <Route exact path="/" component={JobsShow}/>
        <Route exact path="/login" component={LogInPage}/>
        <Route exact path="/registrations/new" component={SignUpPage}/>
        <Route exact path="/user/listings" component={JobsList}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/user/index" component={UserPage}/>
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
