import React from 'react';
import {FormControl, FormGroup} from 'react-bootstrap';
import PropTypes from 'prop-types';

const onSubmit = (event) => {
  event.preventDefault();
}

const onChange = (event) => {
  this.setState({
    input: event.target.value
  })
}

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
  }

  render() {
  return (
    <div className="col-lg-12">
      <div className="offset-lg-4">
        <form onSubmit={this.onSubmit}>
          <FormGroup
          controlId="formBasicText">
            <h1>Search For A Job:</h1>
            <p id="form-helper-text"><em>(try something like "web developer jobs in Raleigh")</em></p>
              <FormControl
              type="text"
              placeholder="Enter text"
              onChange={this.onChange} />
        </FormGroup>
      </form>
    </div>
  </div>
    );
  };
}

export default SearchForm;
