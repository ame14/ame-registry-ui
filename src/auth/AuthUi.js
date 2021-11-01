
import React from 'react';
import Login from "./Login.js"
import Register from "./Register.js"

class AuthUi extends React.Component {
    render() {
        return (<div class="col-12">

            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-5 m-3 content">
                        <Login />
                    </div>
                    <div class="col-sm-5 m-3">
                        <Register />
                    </div>
                </div>
            </div>
        </div>)
    }

}

export default AuthUi;
