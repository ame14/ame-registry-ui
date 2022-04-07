import React from 'react';
import api from "../Api";
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // if token is set clear it, before we try to login
    localStorage.clear();

    event.preventDefault();

    let user = {
      email: event.target['email'].value,
      password: event.target['password'].value
    };

    api.post('/user/login', user)
      .then((response) => {
        localStorage.setItem("accessToken", response.data);
        localStorage.setItem("accessTokenBirth", new Date().getTime())
        window.location = "/"
      })
      .catch((error) => {
        try {
          if (error.response != null && error.response.data == "Invalid credentials") {
            this.setState({ errorMessage: "Your email and/or password are invalid. Please try again or reset your password." })
          }
        } catch (error) {
          this.setState({ errorMessage: "Unknown error" })
        }
      });
  }

  render() {
    let errorDiv;
    if (this.state.errorMessage) {
      errorDiv = (<div class="row">
        <div class="col mt-3 border">
          <div className="text-center p-1 text-danger">{this.state.errorMessage}</div>
        </div>
      </div>);
    }
    return (

      <div class="container-fluid p-5 border" style={{ "font-size": "18px" }}>
        <div class="row">
          <div class="col p-3 border bg-light">
            <h3 class="m-0"> Login </h3>
          </div>
        </div>
        {errorDiv}
        <div class="row">
          <div class="col mt-4">
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <div class='form-group text-start'>
                  <label for='email'>Email</label>
                  <input type="text" class="form-control" id="email" />
                  <div class="form-text">Please enter an email.</div>
                </div>
                <div class='form-group text-start mt-4'>
                  <label for='password'>Password</label>
                  <input type="password" class="form-control" id="password" />
                  <div class="form-text">Please enter a password. Password must have a minimum eight characters, at least one letter, one number.</div>
                </div>
                <div class="row mt-4 ">
                  <button type="submit" class="btn btn-light border">Login</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;
