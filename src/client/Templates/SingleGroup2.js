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
import { AiFillPushpin } from "react-icons/ai";
import { ChatBox } from "react-chatbox-component";
import Navigation from "../Components/Navigation";
import data from "../../../group-data.json";
import data2 from "../../../name-data.json";
import CardItem from "../Components/UserCard";
import "react-chatbox-component/dist/style.css";
import { retrieveCookie } from "../Components/Cookies";

const messages = [
  {
    text: "Hello, I sure do love soccer!",
    id: "2",
    sender: {
      name: "Some Guy",
      uid: "user2",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XzvZk4YY-o4L1vGGIusy1Csy-QWF2N4zTg&usqp=CAU",
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
                            src="http://127.0.0.1:3000/EventPictures/img-1.jpg"
                          />
                          <Card.Body>
                            <Card.Title>SFSU Athletics</Card.Title>
                            <p>Created : 09/14/21</p>
                            <p>Created by : Jack May</p>
                            <p>Members : 230</p>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md="3">
                        <Card style={{ width: "100%" }}>
                          <Card.Body>
                            <Card.Title>About Us</Card.Title>
                            <p>
                              Post about open sports events, chat about sports,
                              and meet new people at SFSU Athletics.
                            </p>
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
                              <BsInstagram /> @SFSUAthletics
                            </Button>
                            <br />
                            <br />
                            <Button
                              style={{ width: "100%" }}
                              variant="outline-primary"
                            >
                              <BsTwitter /> @SFSUAthletics
                            </Button>
                            <br />
                            <br />
                            <Button
                              style={{ width: "100%" }}
                              variant="outline-primary"
                            >
                              <BsFacebook /> SFSU Athletics
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
                              <Nav.Link eventKey="second">Soccer</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="third">Campus Games</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="fourth">
                                General Chat
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col sm={9}>
                          <Tab.Content className="chat-box">
                            <Tab.Pane eventKey="first">
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
                                        "https://3.files.edl.io/3bff/18/09/18/164818-c9d46fef-72ed-42da-86be-948e6797dcc7.jpg",
                                    },
                                  });
                                }}
                              />
                            </Tab.Pane>
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
                                        "https://data.cometchat.com/assets/images/avatars/ironman.png",
                                    },
                                  });
                                }}
                              />
                            </Tab.Pane>
                            <Tab.Pane eventKey="thid">
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
                                        "https://data.cometchat.com/assets/images/avatars/ironman.png",
                                    },
                                  });
                                }}
                              />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
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
                                        "https://data.cometchat.com/assets/images/avatars/ironman.png",
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
