import { Button, Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";

import Navigation from "../Components/Navigation";
import Banners from "../Components/HeroContainer";
import Profile from "../Components/Profile";
import { retrieveCookie } from "../Components/Cookies";
import Footer from "../Components/Footer";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
      time: "6:48 pm",
      show: true,
    };
  }

  home() {
    if (retrieveCookie()) {
      return <Profile history={this.props.history} />;
    }

    return <Banners />;
  }

  render() {
    return (
      <div className="body">
        <Navigation />
        {this.home()}
      </div>
    );
  }
}
