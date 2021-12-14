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
import {
  BsArrowLeft,
  BsFacebook,
  BsInstagram,
  BsThreeDotsVertical,
  BsTwitter,
} from "react-icons/bs";
import { RiArrowGoBackLine } from "react-icons/ri";
import { AiFillPushpin, AiOutlineMail } from "react-icons/ai";
import { ChatBox } from "react-chatbox-component";
import { ToastContainer, toast } from "react-toastify";
import Navigation from "../Components/Navigation";
import data from "../../../group-data.json";
import data2 from "../../../name-data.json";
import CardItem from "../Components/UserCard";
import "react-chatbox-component/dist/style.css";
import { retrieveCookie } from "../Components/Cookies";
import "react-toastify/dist/ReactToastify.css";

const messages = [
  {
    text: "Welcome to the Introductions Channel!",
    id: "2",
    sender: {
      name: "",
      uid: "user2",
      avatar: "http://localhost:3000/Icons/user.jpg",
    },
  },
];

const user = {
  uid: "user1",
};

export default class Group2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: data.Groups,
      names: data2,
      joined: true,
      newGroupModal: false,
      selectedCategory: null,
    };

    this.toggleCreateModal = this.toggleCreateModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.renderUsers = this.renderUsers.bind(this);
    this.joinGroup = this.joinGroup.bind(this);
  }

  toggleCreateModal() {
    this.setState({
      newGroupModal: !this.state.newGroupModal,
    });
  }

  joinGroup() {
    this.setState({
      joined: !this.state.joined,
    });
    toast("Joined Group!");
  }

  getVariant() {
    if (this.state.joined === true) {
      return "success";
    }
    return "warning";
  }

  getText() {
    if (this.state.joined === true) {
      return "Joined Group";
    }
    return "Join Group";
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
        count < 1
      ) {
        count++;
        return (
          <Col md="3">
            <CardItem
              src="http://localhost:3000/Icons/user.jpg"
              text="Jose Castanon"
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
              <Row>
                <Col md="10">
                  <Button
                    className="back-to-events"
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
                </Col>
                <Col md="2">
                  <Button
                    className="back-to-events"
                    variant={this.getVariant()}
                    onClick={() => {
                      this.joinGroup();
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {this.getText()}
                    </div>
                  </Button>
                </Col>
              </Row>
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
                            src="http://127.0.0.1:3000/GroupPictures/cinemaclub.png"
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
                            <p>A space to discuss films, talk about events.</p>
                          </Card.Body>
                        </Card>
                        <br />
                        <Card style={{ width: "100%" }}>
                          <Card.Body>
                            <Card.Title>Contact Information</Card.Title>
                            <Button
                              style={{ width: "100%" }}
                              variant="outline-primary"
                            >
                              <AiOutlineMail /> sfsucinema
                            </Button>
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
                    disabled={!this.state.joined}
                  >
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="first"
                    >
                      <Row>
                        <Col sm={3}>
                          <Nav variant="pills" className="flex-column chat-nav">
                            <Nav.Item>
                              <Nav.Link eventKey="first">New</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">
                                <AiFillPushpin /> Introductions
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col sm={9}>
                          <Tab.Content className="chat-box">
                            <Tab.Pane eventKey="first" />
                            <Tab.Pane eventKey="second">
                              <ChatBox
                                messages={messages}
                                user={user}
                                onSubmit={(message) => {
                                  console.log(message);
                                  messages.push({
                                    text: message,
                                    id: "4",
                                    sender: {
                                      name: "Ironman",
                                      uid: "user1",
                                      avatar:
                                        "http://localhost:3000/Icons/user.jpg",
                                    },
                                  });
                                }}
                              />
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </Tab>
                  <Tab
                    eventKey="members"
                    title="Members"
                    disabled={!this.state.joined}
                  >
                    <Row>{this.renderUsers()}</Row>
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
        <ToastContainer position="bottom-right" autoClose={2000} />
      </div>
    );
  }
}
