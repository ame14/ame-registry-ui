import React from "react";

class EmptyNav extends React.Component {

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">AME</a>
          <div class="d-flex">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>)
  };
}

export default EmptyNav;