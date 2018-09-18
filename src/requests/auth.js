function login(credentials) {
  return fetch('http://localhost:8080/sessions', {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(data=>{
    return data.json();
  });
}

function signUp(credentials) {
  return fetch('http://localhost:8080/users', {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(data=>{
    return data.json();
  });
}

export { login, signUp };