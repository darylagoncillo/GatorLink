import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./app.css";
import Home from "./Templates/Home";
import Events from "./Templates/Events";
import Groups from "./Templates/Groups";
import ProfileEditor from "./Templates/ProfileEditor";
import Event from "./Templates/SingleEvent";
import Search from "./Templates/Search";
import Login from "./Templates/Login";
import Registration from "./Templates/Registration";
import Questionnaire from "./Templates/Questionnaire";
import Group from "./Templates/Groups";

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
        <Route component={Group} path="/Group" />
        <Route component={ProfileEditor} path="/EditProfile" />
        <Route component={Event} path="/Event" />
        <Route component={Search} path="/Search" />
        <Route component={Login} path="/Login" />
        <Route component={Registration} path="/Registration" />
        <Route component={Questionnaire} path="/Questionnaire" />
      </BrowserRouter>
    );
  }
}
