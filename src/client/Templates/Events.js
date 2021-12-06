import { Button, Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";

import Navigation from "../Components/Navigation";
import EventsContainer from "../Components/EventsContainer";

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
            <Col md="3" sm="12">
              <div className="sidebar">
                <p>sidebar</p>
              </div>
            </Col>

            <Col>
              <div className="content">
                <EventsContainer />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
