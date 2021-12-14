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
import { AiFillPushpin } from "react-icons/ai";
import Navigation from "../Components/Navigation";
import data from "../../../group-data.json";
import data2 from "../../../name-data.json";
import CardItem from "../Components/UserCard";

import { retrieveCookie } from "../Components/Cookies";

export default class Group extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: data.Groups,
      names: data2,
      newGroupModal: false,
      selectedCategory: null,
    };

    this.toggleCreateModal = this.toggleCreateModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.renderUsers = this.renderUsers.bind(this);
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

  renderUsers() {
    let count = 0;
    return this.state.names.map((item) => {
      if (
        (this.state.selectedCategory === null ||
          this.state.selectedCategory === item.category) &&
        count < 10
      ) {
        count++;
        return (
          <Col md="3">
            <CardItem
              src="http://localhost:3000/Icons/user.jpg"
              text={item.name}
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
                  <Tab
                    eventKey="forum"
                    title="Forum"
                    disabled={!retrieveCookie()}
                  >
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="first"
                    >
                      <Row>
                        <Col sm={3}>
                          <Nav variant="pills" className="flex-column chat-nav">
                            <Nav.Item>
                              <Nav.Link eventKey="first">
                                <AiFillPushpin /> Introductions
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">
                                Silent Films
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="third">
                                Movies you love
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="fourth">Comedies</Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col sm={9}>
                          <Tab.Content>
                            <Tab.Pane eventKey="first">here</Tab.Pane>
                            <Tab.Pane eventKey="second">again</Tab.Pane>
                            <Tab.Pane eventKey="thid">here</Tab.Pane>
                            <Tab.Pane eventKey="fourth">again</Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </Tab>
                  <Tab
                    eventKey="members"
                    title="Members"
                    disabled={!retrieveCookie()}
                  >
                    <Row>{this.renderUsers()}</Row>
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
