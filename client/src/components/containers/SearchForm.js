import React from 'react';
import {FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import PropTypes from 'prop-types';

const SearchForm = ({name, placeholder, value, onChange}) => {
  return (
    <div className="col-lg-12">
      <div className="offset-lg-4">
        <form>
          <FormGroup
          controlId="formBasicText">
            <ControlLabel>Find A Job</ControlLabel>
              <FormControl
              type="text"
              value="{this.state.value}"
              placeholder="Enter text"
              onChange="{this.handleChange}" />
        </FormGroup>
      </form>
    </div>
  </div>
  );
};

SearchForm.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default SearchForm;
