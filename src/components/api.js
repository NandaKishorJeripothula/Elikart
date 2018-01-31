import fetch from 'isomorphic-fetch';
import { projectConfig } from './config';


const authenticateUser = (username, password, shouldSignUp) => {
    var path = shouldSignUp ? '/signup' : '/login';
    var requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          provider: "username",
          data: {
            "username": username,
            "password": password
          }
        })
    };
    console.log("entered authen");
    return fetch(projectConfig.url.auth + path, requestOptions)
    .then(function(response) {
      console.log("returned response")
      return response.json();
    })
    .catch(function(error) {
      console.log('Request Failed:' + error);
    });
  }
  export {
    authenticateUser
  }
