import { Button } from "react-bootstrap";
import React, { Component } from "react";

import Navigation from "../Components/Navigation";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
      time: "6:48 pm",
      show: true,
    };
    this.showMessage = this.showMessage.bind(this);
    this.getMessage = this.getMessage.bind(this);
  }

  showMessage() {
    if (this.state.show === true) {
      this.setState({
        show: false,
      });
    } else {
      this.setState({
        show: true,
      });
    }
  }

  getMessage() {
    if (this.state.show === true) {
      return this.state.message;
    }

    return "";
  }

  render() {
    return (
      <div>
        <div>
          <Navigation />
        </div>
        <div>
          <Button onClick={this.showMessage}>Click me</Button>
          <p>{this.getMessage()}</p>
        </div>
      </div>
    );
  }
}
