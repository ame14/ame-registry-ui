import React from "react";


class DevNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    // removes access token and other items
    localStorage.clear();
    window.location = "/login"
  }
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">AME</a>
          <div class="d-flex">
            <ul class="navbar-nav">
            {/* <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/manage">Manage extensions</a>
              </li> */}
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/register">Register Extension</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={this.logout} aria-current="page" href="#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>)
  };
}

export default DevNavBar;