import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./app.css";
import Home from "./Templates/Home";

export default class Routing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} component={Home} />}
        />

        {/* <Route component={Home} path="/home" /> */}
      </BrowserRouter>
    );
  }
}
