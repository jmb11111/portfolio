import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md  navbar-dark bg-dark sticky-top">
        <a className="navbar-brand" href="#">
          <img
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top rounded mr-2"
            alt=""
          />
          Blasbalg
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
        >
          <span className="navbar-toggler-icon mr-auto" />
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a
                href="https://www.facebook.com/joshuablasbalg"
                target="_blank"
                class="social facebook ml-0"
              >
                Facebook
              </a>
            </li>
            <li class="nav-item">
              <a
                href="https://twitter.com/josh121592"
                target="_blank"
                class="social twitter ml-0"
              >
                Twitter
              </a>
            </li>
            <li class="nav-item">
              <a
                href="https://www.linkedin.com/in/joshua-blasbalg"
                target="_blank"
                class="social linkedin ml-0"
              >
                LinkedIn
              </a>
            </li>
            <li class="nav-item">
              <a
                href="https://github.com/jmb11111"
                target="_blank"
                class="social github ml-0"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
