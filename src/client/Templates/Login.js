import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "../Components/Navigation";
import Banners from "../Components/HeroContainer";
import Profile from "../Components/Profile";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
      time: "6:48 pm",
      show: true,
      username: "",
      password: "",
    };
  }

  validateForm() {
    return username.length > 0 && password.length > 0;
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <iframe src="https://idp.sfsu.edu/idp/profile/SAML2/Redirect/SSO?execution=e2s1" />
    );
  }
}
