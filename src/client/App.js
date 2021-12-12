import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./app.css";
import Home from "./Templates/Home";
import Events from "./Templates/Events";
import Groups from "./Templates/Groups";
import ProfileEditor from "./Templates/ProfileEditor";

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

        <Route component={Events} path="/Events" />
        <Route component={Groups} path="/Groups" />
        <Route component={ProfileEditor} path="/EditProfile" />
      </BrowserRouter>
    );
  }
}
