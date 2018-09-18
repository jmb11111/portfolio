import React, { Component } from "react";
import logo from "./logo.svg";
import Home from "./Home.js";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={`/`} render={() => <Home />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
