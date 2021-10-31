import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Navbar from './navbar/Navbar'
import Register from './login/Register'
import Login from './login/Login.js'
import api from './Api';

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

  return true;
}

function App() {

  // if their is no user authenticated, only route to register and login pages
  if (!userAuthenticated()) {
    return (
      <BrowserRouter>
        <Route exact path ="/register">
          <Register />
        </Route>
        <Route exact path="/login" >
          <Login />
        </Route>
      </BrowserRouter>
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

