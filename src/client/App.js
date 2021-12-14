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
import Questionnaire1 from "./Templates/Questionnaire1";
import Questionnaire2 from "./Templates/Questionnaire2";
import Questionnaire3 from "./Templates/Questionnaire3";
import Questionnaire4 from "./Templates/Questionnaire4";
import Group from "./Templates/SingleGroup";

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
        <Route component={Questionnaire1} path="/Questionnaire1" />
        <Route component={Questionnaire2} path="/Questionnaire2" />
        <Route component={Questionnaire3} path="/Questionnaire3" />
        <Route component={Questionnaire4} path="/Questionnaire4" />
      </BrowserRouter>
    );
  }
}
