import sessionApi from '../api/SessionApi';

export function logInSuccess(data) {
  return {type: 'LOG_IN_SUCCESS', data: data }
}
export function newUserSuccess(data) {
  return {type: 'NEW_USER_SUCCESS', data: data }
}

export function logInUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(logInSuccess(credentials));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createNewUser(credentials) {
  return function(dispatch) {
    return sessionApi.newUser(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(newUserSuccess(credentials));
    }).catch(error => {
      throw(error);
    });
  };
}

export function logOutUser() {
  sessionStorage.removeItem('jwt');
  return {type: 'LOG_OUT' }
}
