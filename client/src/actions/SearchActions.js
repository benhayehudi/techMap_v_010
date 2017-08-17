import { fetchByUserInput } from '../services/SearchServices';
import SearchReducer from '../reducers/SearchReducer';

export const updateJobs = (input) => {
  return dispatch => {
    return fetchByUserInput(this.props.input)
      .then(updateJobs => dispatch(SearchReducer(updateJobs)));
  }
}
