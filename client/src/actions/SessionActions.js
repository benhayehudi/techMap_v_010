import sessionApi from '../api/SessionApi';

export function logInSuccess() {
  return {type: 'LOG_IN_SUCCESS' }
}

export function logInUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(logInSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

export function createNewUser(credentials) {
  return function(dispatch) {
    return sessionApi.newUser(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(logInSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

export function logOutUser() {
  sessionStorage.removeItem('jwt');
  return {type: 'LOG_OUT' }
}