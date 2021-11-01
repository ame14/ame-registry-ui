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

    handleSubmit(e) {
        e.preventDefault();

        if (e.target["password"] != e.target["confirmPassword"]) {
            this.setState({ errorMessage: "Password and confirm fields must match" });
        }

        let user = {
            email: e.target["email"].value,
            password: e.target["password"].value,
            type: e.target["accountType"].value,
        }

        api.post('/user/register', user)
            .then(response => {
                alert("Your account has been created");
                window.location = "/";
            }).catch(error => {
                if (error.response != null && error.response.data == "password or email doesn't meet requirements") {
                    this.setState({ errorMessage: "Your email and/or password don't the meet requirements" });
                }
                console.log(error);
            })
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

            <div class="container-fluid p-5  border" style={{ "font-size": "18px" }}>
                <div class="row">
                    <div class="col p-3 border bg-light">
                        <h3 class="m-0"> Register </h3>
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
                                    <label for='passwordField'>Password</label>
                                    <input type="password" class="form-control" id="password" />
                                    <div class="form-text">Please enter a password. Password must have a minimum eight characters, at least one letter, one number.</div>
                                </div>
                                <div class='form-group text-start mt-4'>
                                    <label for='confirmPassword'>Confirm password</label>
                                    <input type="password" class="form-control" id="confirmPassword" />
                                    <div class="form-text">Please confirm password.</div>
                                </div>
                                <div class='form-group text-start mt-4'>
                                    <label for='accountType'>Account type</label>
                                    <select class="form-select" id="accountType">
                                        <option value="writer">Writer</option>
                                        <option value="developer">Developer</option>
                                    </select>
                                    <div class="form-text">Please select your account type. Refer to the table below for more information.</div>
                                </div>
                                <div class="row mt-4 ">
                                    <button type="submit" class="btn btn-light border">Register</button>
                                </div>

                                <div class="mt-5 row">
                                    <hr />
                                    <table class="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>User type</th>
                                                <th>Roles</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="row">Writer</td>
                                                <td>
                                                    <ul>
                                                        <li>
                                                            Search extensions
                                                        </li>
                                                        <li>
                                                            View extensions
                                                        </li>
                                                        <li>
                                                            Create extensions instance
                                                        </li>
                                                        <li>
                                                            Manage extension instances
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">Developer</td>
                                                <td>
                                                    <ul>
                                                        <li>
                                                            Register a new extension
                                                        </li>
                                                        <li>
                                                            Update extension description
                                                        </li>
                                                        <li>
                                                            Add information for updates
                                                        </li>
                                                        <li>
                                                            View extensions statistics
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
