import React from 'react';
import {FormControl, FormGroup} from 'react-bootstrap';
import PropTypes from 'prop-types';

const SearchForm = ({name, placeholder, value, onChange}) => {
  return (
    <div className="col-lg-12">
      <div className="offset-lg-4">
        <form>
          <FormGroup
          controlId="formBasicText">
            <h1>Search For A Job:</h1>
            <p id="form-helper-text"><em>(try something like "web developer jobs in Raleigh")</em></p>
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
