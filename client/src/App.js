import React, { Component } from 'react';
import {FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <form>
      <FormGroup
        controlId="formBasicText">
        <ControlLabel>Find A Job</ControlLabel>
        <FormControl
          type="text"
          value="{this.state.value}"
          placeholder="Enter text"
          onChange="{this.handleChange}"
        />
        <FormControl.Feedback />
      </FormGroup>
    </form>
      </div>
    );
  }
}

export default App;
