import React from 'react';
import {FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import PropTypes from 'prop-types';

const TextArea = ({name, placeholder, value, onChange}) => {
  return (
    <div>
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
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextArea;
