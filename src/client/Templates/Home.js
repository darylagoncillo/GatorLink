import { Button, Container, Row, Col } from "react-bootstrap";
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
  }

  render() {
    return (
      <div className="body">
        <Navigation />
        <br />
        <Container>
          <Row>
            <Col md="3">
              <div className="sidebar">
                <p>sidebar</p>
              </div>
            </Col>
            <Col>
              <div className="content">
                <p>content</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
