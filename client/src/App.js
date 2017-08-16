import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/containers/Home';
import About from './components/About';
import Contact from './components/Contact';
import navbarInstance from './components/NavBar';
import SearchForm from './components/containers/SearchForm';
import JobsShow from './components/containers/JobsShow';

const ReactRouter = () => (
  <Router>
    <div className="Routes">
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
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

        <div className="SearchForm">
          < SearchForm />
        </div>

        <br /><br />

        <ReactRouter />

    </div>
    );
  }
}
export default App;
