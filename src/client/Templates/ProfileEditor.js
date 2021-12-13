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
  ListGroup,
  Tab,
  Tabs,
  Image,
} from "react-bootstrap";
import React, { Component } from "react";
import "../Components/Cards.css";
import Modal from "react-modal";
import {
  BsArrowLeft,
  BsThreeDotsVertical,
  BsListUl,
  BsFillPersonBadgeFill,
  BsFillShieldFill,
} from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { GoDeviceCamera } from "react-icons/go";
import { AiFillBell } from "react-icons/ai";
import Navigation from "../Components/Navigation";
import EventSidebar from "../Components/EventSidebar";
import data from "../../../event-data.json";
import EPSidebar from "../Components/EPSidebar";
import profilePicture from "../../images/profile-img.jpg";

export default class ProfileEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="body">
        <Navigation />
        <br />
        <Container fluid className="page-content">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col md="3" sm="12" xs="12">
                <div className="sidebar">
                  <div className="profile-sidebar">
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <BsFillPersonBadgeFill />
                          Edit Profile
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <AiFillBell />
                          Notifications
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          <BsFillShieldFill />
                          Privacy
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
              </Col>

              <Col Col md="9" sm="12" xs="12">
                <div className="content">
                  <Navbar bg="light" expand="lg">
                    <Container>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <Navbar.Brand href="/EditProfile">
                            Edit {this.state.selectedCategory} Profile
                            <ListGroup defaultActiveKey="#link1">
                              <ListGroup.Item action href="/EditProfile">
                                <ImProfile />
                                General
                              </ListGroup.Item>
                            </ListGroup>
                            <ListGroup defaultActiveKey="#link2">
                              <ListGroup.Item action href="/EditProfile">
                                <BsListUl />
                                Interests
                              </ListGroup.Item>
                            </ListGroup>
                            <ListGroup defaultActiveKey="#link2">
                              <ListGroup.Item action href="/EditProfile">
                                <GoDeviceCamera />
                                Extracurricular
                              </ListGroup.Item>
                            </ListGroup>
                          </Navbar.Brand>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">hello</Tab.Pane>
                        <Tab.Pane eventKey="third">hello again</Tab.Pane>
                      </Tab.Content>
                    </Container>
                    <Container>
                      <Col xs={10} md={5}>
                        <Image src={profilePicture} fluid roundedCircle />
                      </Col>
                    </Container>
                  </Navbar>
                </div>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}
