import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Navbar from './navbar/Navbar'
import api from './Api';
import AuthUi from './auth/AuthUi.js';
import EmptyNav from './navbar/EmptyNav';

function userAuthenticated() {

  if (localStorage.getItem("accessToken") == "" || localStorage.getItem("accessToken") == null) {
    return false;
  }

  // if the ../user/ returns an error with the current token, return false
  api.get("/user/").then((response) => {
    console.log("success")
  })
    .catch((response) => {
      // this probably means the token is expired, so just clear it
      localStorage.clear();
      return false;
    })
  // TODO only return true after user logs in
  return true;
}

function App() {

  // if their is no user authenticated, only route to register and login pages
  if (!userAuthenticated()) {
    return (
      <div class="container-fluid">
        <div class="row">
          <EmptyNav />
        </div>
        <div class="row">
        <AuthUi />
        </div>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <div class="container-fluid">
        <div class="row">
          <Navbar />
        </div>
        <div class="row">
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

