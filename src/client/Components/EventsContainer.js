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
import Modal from "react-modal";
import { BsArrowLeft, BsThreeDotsVertical } from "react-icons/bs";
import data from "../../../event-data.json";

import "./Cards.css";

import CardItem from "./EventCard";

export default class GroupsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: data.Events,
      newEventModal: false,
      selectedCategory: null,
    };

    this.renderEvents = this.renderEvents.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      newEventModal: !this.state.newEventModal,
    });
  }

  selectCategory(category) {
    if (this.state.selectedCategory === category) {
      this.setState({
        selectedCategory: null,
      });
    }
    this.setState({
      selectedCategory: category,
    });
  }

  renderEvents() {
    return this.state.events.map((item) => {
      if (this.state.selectedCategory === null) {
        return (
          <Col md="4">
            <CardItem
              src={item.image_url}
              text={item.event_name}
              label={item.date}
            />
          </Col>
        );
      }

      if (this.state.selectedCategory === item.category) {
        return (
          <Col md="4">
            <CardItem
              src={item.image_url}
              text={item.event_name}
              label={item.date}
            />
          </Col>
        );
      }
    });
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
                  <NavDropdown.Item href="#action/3.1">Top</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    This Week
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    This Week
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
        <Button variant="secondary">Go Back</Button>{" "}
        <Button variant="warning" onClick={this.toggleModal}>
          Create an Event
        </Button>
        <br />
        <Row>{this.renderEvents()}</Row>
        <Modal
          shouldCloseOnOverlayClick
          onRequestClose={this.toggleModal}
          isOpen={this.state.newEventModal}
        >
          <h4>
            <BsArrowLeft onClick={this.toggleModal} />
          </h4>
        </Modal>
      </div>
    );
  }
}
