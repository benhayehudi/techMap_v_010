import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import navbarInstance from './components/NavBar';
import SearchForm from './components/containers/SearchForm';
import JobsShow from './components/containers/JobsShow';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          { navbarInstance }
        </div>

        <div>
          { Header }
          <br /> <br />

          < SearchForm />
      </div>
      <div>
        <h1>Jobs:</h1>
        { JobsShow }
      </div>
    </div>
    );
  }
}
export default App;
