import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Navigation from "../Components/Navigation";

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}
