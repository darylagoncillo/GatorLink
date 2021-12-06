import { Button, Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";

import Navigation from "../Components/Navigation";

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
