import {
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Card,
  NavDropdown,
} from "react-bootstrap";
import React, { Component } from "react";
import data from "../../../event-data.json";
import "./components.css";

import "./Cards.css";
import CardItem from "./EventCard";

export default class GroupsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: data.Events,
    };

    this.renderEvents = this.renderEvents.bind(this);
  }

  renderEvents() {
    return this.state.events.map((item) => (
      <Col md="4">
        <CardItem
          src={item.image_url}
          text={item.event_name}
          label={item.date}
          path="/services"
        />
      </Col>
    ));
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Discover Events</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <NavDropdown title="Sort By" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />
        <Row>{this.renderEvents()}</Row>
      </div>
    );
  }
}
