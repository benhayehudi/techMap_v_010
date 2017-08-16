import React from 'react';
import {FormControl, FormGroup} from 'react-bootstrap';
import searchForJobs from './SearchForJobs';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      input: ''
    }
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.searchForJobs(this.state.input);
  }

  onChange = (event) => {
    this.setState({
      input: event.target.value
    });
  };

  render() {

  return (
    <div className="col-lg-12">
      <div className="offset-lg-4">
        <form onSubmit={(event) => this.onSubmit(event)}>
          <FormGroup
          controlId="formBasicText" onSubmit={(event) => this.onSubmit(event)}>
            <h1>Search For A Job:</h1>
            <p id="form-helper-text"><em>(try something like "web developer jobs in Raleigh")</em></p>
              <FormControl
              type="text"
              placeholder="Enter text"
              onChange={(event) => this.onChange(event)} />
        </FormGroup>
      </form>
    </div>
  </div>
    );
  };
}

export default SearchForm;
