import { Button, Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";

import Navigation from "../Components/Navigation";
import Banners from "../Components/HeroContainer";
import Profile from "../Components/Profile";

export default class Questionnaire3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
      time: "6:48 pm",
      show: true,
    };

    // onSubmit(event => {
    //    username = event.target.username,
    //    password = event.target.password
    // })
  }

  render() {
    return (
      <div className="body">
        <p>hello</p>
      </div>
    );
  }
}
