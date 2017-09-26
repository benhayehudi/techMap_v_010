class SessionApi {

  static login(credentials) {

    const request = new Request('http://localhost:3001/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
      }),
      body: JSON.stringify({auth: credentials})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static newUser(credentials) {

    const request = new Request('http://localhost:3001/registrations/new', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
      }),
      body: JSON.stringify({auth: credentials})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default SessionApi;
