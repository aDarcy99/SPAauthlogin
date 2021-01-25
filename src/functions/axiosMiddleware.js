import axios from "axios";
import auth from "./clientAuth.js";
//fire functions
addAuthorizationHeader();
onUnauthorizedAccessAttempt();

function onUnauthorizedAccessAttempt(){
  axios.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    error.response.status ? auth.logout() : "";
    return Promise.reject(error);
  });
}

// Add thew authorization header to the request so the server can check if client is allowed to view resource
function addAuthorizationHeader() {
  axios.interceptors.request.use((config) => {
    if (auth.inMemoryToken) {
      config.headers.authorization = `Bearer ${auth.inMemoryToken}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
}