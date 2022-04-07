import React from "react";

import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import api from "../Api";
import Navbar from '../navbar/Navbar'
import DevNavBar from '../navbar/DevNavbar'
import AuthUi from '../auth/AuthUi.js';
import EmptyNav from '../navbar/EmptyNav';
import ExtensionList from '../extension/ExtensionList';
import InstanceList from '../instance/InstanceList';
import RegisterExtension from '../extension/RegisterExtension';
import reactRouterDom from "react-router-dom";
import Home from "../home/Home";
class Layout extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        if (localStorage.getItem("accessToken") == "" || localStorage.getItem("accessToken") == null) {
            return;
        }

        api.get("/user/").then((response) => {
            this.setState({ user: response.data });
        })
            .catch((response) => {
                // this probably means the token is expired, so just clear it
                localStorage.clear();
            })
    }

    render() {

        if (this.state.user === null) {
            return <BrowserRouter>
                <div class="container-fluid">
                    <div class="row">
                        <EmptyNav />
                    </div>
                    <Route exact path="/">
                        <div class="row">
                            <Home />
                        </div>
                    </Route>
                    <Route  path="/login">
                        <div class="row">
                        <AuthUi />
                        </div>
                    </Route>
                </div>
            </BrowserRouter>
        
        }

        const userRoles = this.state.user.roles;
        if (userRoles.includes("ROLE_WRITER")) {
            return <BrowserRouter>
                <div class="container-fluid">
                    <div class="row">
                        <Navbar />
                    </div>
                    <Route exact path="/">
                        <div class="row">
                            <Home />
                        </div>
                    </Route>
                    <Route path="/extensions">
                        <div class="row">
                            <ExtensionList />
                        </div>
                    </Route>
                    <Route path="/instances">
                        <div class="row">
                            <InstanceList />
                        </div>
                    </Route>

                </div>
            </BrowserRouter>
        } else if (userRoles.includes("ROLE_DEVELOPER")) {
            return <BrowserRouter>
                <div class="container-fluid">
                    <div class="row">
                        <DevNavBar />
                    </div>
                    <Route exact path="/">
                        <div class="row">
                            <Home />
                        </div>
                    </Route>
                    <Route path="/register">
                        <div class="row">
                            <RegisterExtension />
                        </div>
                    </Route>
                    <Route path="/manage">
                        <div class="row">
                            <ExtensionList />
                        </div>
                    </Route>
                </div>
            </BrowserRouter>
        }

    }
}


export default Layout;