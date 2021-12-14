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
  Pagination,
  Tab,
  Tabs,
} from "react-bootstrap";
import React, { Component } from "react";

import Modal from "react-modal";
import { BsArrowLeft, BsThreeDotsVertical } from "react-icons/bs";
import { RiArrowGoBackLine } from "react-icons/ri";
import Navigation from "../Components/Navigation";

import data from "../../../group-data.json";

import CardItem from "../Components/EventCard";
import GroupSidebar from "../Components/GroupSidebar";

export default class Group extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: data.Groups,
      newGroupModal: false,
      selectedCategory: null,
    };

    this.toggleCreateModal = this.toggleCreateModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  toggleCreateModal() {
    this.setState({
      newGroupModal: !this.state.newGroupModal,
    });
  }

  closeModal() {
    this.setState({
      newGroupModal: false,
      groupModal: null,
    });
  }

  openModal(id) {
    this.setState({
      newGroupModal: false,
      groupModal: id,
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

  render() {
    return (
      <div className="body">
        <Navigation />

        <Container fluid className="page-content">
          <Row className="justify-content-md-center">
            <Col md="8" sm="12">
              <Button
                variant="warning"
                onClick={() => {
                  this.props.history.push("/Groups");
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RiArrowGoBackLine />
                  Back to Groups
                </div>
              </Button>

              <div className="content">
                <Tabs
                  defaultActiveKey="info"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="info" title="Info">
                    <Row className="single-group">
                      <Col md="5">
                        <Card style={{ width: "100%" }}>
                          <Card.Img
                            variant="top"
                            src="http://127.0.0.1:3000/GroupPictures/cinemaclub.PNG"
                          />
                          <Card.Body>
                            <Card.Title>SFSU Cinema Club</Card.Title>
                            <p>Created : 12/14/21</p>
                            <p>Created by : Jose Castanon</p>
                            <p>Members : 1</p>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md="3">
                        <Card style={{ width: "100%" }}>
                          <Card.Body>
                            <Card.Title>About Us</Card.Title>
                            <p>
                              A space to talk about films or chat with others
                              about related topics.
                            </p>
                          </Card.Body>
                        </Card>
                        <br />
                        <Card style={{ width: "100%" }}>
                          <Card.Body>
                            <Card.Title>Contact Information</Card.Title>
                            <p>
                              A space to talk about films or chat with others
                              about related topics.
                            </p>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md="4">
                        <Card style={{ width: "100%" }}>
                          <Card.Body>
                            <Card.Title>Upcoming Events</Card.Title>
                            <p>No upcoming events.</p>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="forum" title="Forum" disabled>
                    here
                  </Tab>
                  <Tab eventKey="members" title="Members" disabled>
                    here
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
