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
import "../Components/Cards.css";
import Modal from "react-modal";
import { BsArrowLeft, BsThreeDotsVertical } from "react-icons/bs";
import Navigation from "../Components/Navigation";
import EventSidebar from "../Components/EventSidebar";
import data from "../../../event-data.json";

import CardItem from "../Components/EventCard";

export default class Events extends Component {
  constructor(props) {
    super(props);

    const categories = [];

    data.Events.forEach((element) => {
      categories.push(element.category);
    });

    this.state = {
      events: data.Events,
      newEventModal: false,
      selectedCategory: null,
      categories,
    };

    this.renderEvents = this.renderEvents.bind(this);
    this.toggleCreateModal = this.toggleCreateModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
  }

  toggleCreateModal() {
    this.setState({
      newEventModal: !this.state.newEventModal,
    });
  }

  closeModal() {
    this.setState({
      newEventModal: false,
      eventModal: null,
    });
  }

  openModal(id) {
    this.setState({
      newEventModal: false,
      eventModal: id,
    });
  }

  selectCategory(category) {
    if (this.state.selectedCategory === category) {
      this.setState({
        selectedCategory: null,
      });
    } else {
      this.setState({
        selectedCategory: category,
      });
    }
  }

  renderEvents() {
    return this.state.events.map((item) => {
      if (
        this.state.selectedCategory === null ||
        this.state.selectedCategory === item.category
      ) {
        return (
          <Col md="4">
            <CardItem
              src={item.image_url}
              text={item.event_name}
              label={item.date}
              event_id={item.event_id}
              history={this.props.history}
              attending={item.attending}
            />
          </Col>
        );
      }
    });
  }

  render() {
    return (
      <div className="body">
        <Navigation />
        <br />
        <Container fluid className="page-content">
          <Row className="mobile-row">
            <Col md="3" sm="12" xs="12" className="sidebar">
              <div className="sidebar-contents">
                <EventSidebar
                  selectedCategory={this.state.selectedCategory}
                  categories={this.state.categories}
                  selectCategory={this.selectCategory}
                />
              </div>
            </Col>

            <Col Col md="9" sm="12" xs="12">
              <div className="content">
                <Navbar bg="light" expand="lg">
                  <Container>
                    <Navbar.Brand href="/">
                      Discover {this.state.selectedCategory} Events
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ml-auto">
                        <NavDropdown title="Sort By" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">
                            Top
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">
                            This Week
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                        </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
                <Button
                  className="create-event"
                  variant="warning"
                  onClick={this.toggleCreateModal}
                >
                  Create an Event
                </Button>
                <br />
                <Row>{this.renderEvents()}</Row>
                <Modal
                  className="create-modal"
                  shouldCloseOnOverlayClick
                  onRequestClose={this.toggleCreateModal}
                  isOpen={this.state.newEventModal}
                >
                  <h4>
                    <BsArrowLeft onClick={this.toggleCreateModal} />
                  </h4>
                  <Col>
                    <Navbar variant="light" className="create-nav-event" bg="warning">
                      <Container>
                        <Navbar.Brand className="brand">Create Event</Navbar.Brand>
                      </Container>
                    </Navbar>
                    <br />
                  </Col>
                  <Col>
                    <Form>
                      <Form.Group className="create-title" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>

                      <Form.Group className="create-date" controlId="formBasicPassword">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" />
                      </Form.Group>

                      <Form.Group className="create-details" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Details</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>

                      <Row>
                        <Col md>
                          <Form.Group className="create-time" controlId="formBasicPassword">
                            <Form.Label>Time Start</Form.Label>
                            <Form.Control type="time" />
                          </Form.Group>
                        </Col>
                        <Col md>
                          <Form.Group className="create-time" controlId="formBasicPassword">
                            <Form.Label>Time End</Form.Label>
                            <Form.Control type="time" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Button className="button123" variant="warning"
                      href="/Events">Create</Button>{' '}
                    </Form>
                  </Col>
                </Modal>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
