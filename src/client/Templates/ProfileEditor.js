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
  InputGroup,
} from "react-bootstrap";
import React, { Component } from "react";
import "../Components/ProfileEditor.css";
import Modal from "react-modal";
import { BsFillPersonBadgeFill, BsFillShieldFill } from "react-icons/bs";
import { AiFillBell } from "react-icons/ai";
import Navigation from "../Components/Navigation";
import profilePicture from "../../images/profile-img.jpg";

export default class ProfileEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="profileEditorBody">
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
                          </Navbar.Brand>
                          <Col xs={6} md={4}>
                            <Image src={profilePicture} fluid roundedCircle />
                          </Col>
                          <Form>
                            <Row className="align-items-center">
                              <Col xs="auto">
                                <Form.Label
                                  htmlFor="inlineFormInput"
                                  visuallyHidden
                                >
                                  First Name
                                </Form.Label>
                                <Form.Control
                                  className="mb-2"
                                  id="inlineFormInput"
                                  placeholder="Jane Doe"
                                />
                              </Col>
                              <Col xs="auto">
                                <Form.Label
                                  htmlFor="inlineFormInput"
                                  visuallyHidden
                                >
                                  Last Name
                                </Form.Label>
                                <Form.Control
                                  className="mb-2"
                                  id="inlineFormInput"
                                  placeholder="Jane Doe"
                                />
                              </Col>
                              <Col xs="auto">
                                <Form.Label
                                  htmlFor="inlineFormInputGroup"
                                  visuallyHidden
                                >
                                  Username
                                </Form.Label>
                                <InputGroup className="mb-2">
                                  <InputGroup.Text>@</InputGroup.Text>
                                  <FormControl
                                    id="inlineFormInputGroup"
                                    placeholder="Username"
                                  />
                                </InputGroup>
                              </Col>
                            </Row>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label>About Me</Form.Label>
                              <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <button
                              type="button"
                              className="btn btn-primary float-right"
                            >
                              Save
                            </button>
                          </Form>
                        </Tab.Pane>

                        <Tab.Pane eventKey="second">
                          <Navbar.Brand>Notifications</Navbar.Brand>
                          <Col>
                            <h6 className= "edit-profile">Comments</h6>
                            <Form>
                              <Form.Switch
                                type="switch"
                                id="cpush"
                                label="Push"
                              />
                              <Form.Switch
                                type="switch"
                                id="cemail"
                                label="Email"
                              />
                              <Form.Switch
                                type="switch"
                                id="csms"
                                label="SMS"
                              />
                            </Form>
                            <h6 className= "edit-profile">Reminders</h6>
                            <Form>
                              <Form.Switch
                                type="switch"
                                id="rpush"
                                label="Push"
                              />
                              <Form.Switch
                                type="switch"
                                id="remail"
                                label="Email"
                              />
                              <Form.Switch
                                type="switch"
                                id="rsms"
                                label="SMS"
                              />
                            </Form>
                            <h6 className= "edit-profile">Update From Friends</h6>
                            <Form>
                              <Form.Switch
                                type="switch"
                                id="upush"
                                label="Push"
                              />
                              <Form.Switch
                                type="switch"
                                id="uemail"
                                label="Email"
                              />
                              <Form.Switch
                                type="switch"
                                id="usms"
                                label="SMS"
                              />
                            </Form>
                            <h6 className= "edit-profile">Events</h6>
                            <Form>
                              <Form.Switch
                                type="switch"
                                id="epush"
                                label="Push"
                              />
                              <Form.Switch
                                type="switch"
                                id="eemail"
                                label="Email"
                              />
                              <Form.Switch
                                type="switch"
                                id="esms"
                                label="SMS"
                              />
                            </Form>
                            <h6 className= "edit-profile">Marketplace</h6>
                            <Form>
                              <Form.Switch
                                type="switch"
                                id="mpush"
                                label="Push"
                              />
                              <Form.Switch
                                type="switch"
                                id="memail"
                                label="Email"
                              />
                              <Form.Switch
                                type="switch"
                                id="msms"
                                label="SMS"
                              />
                            </Form>
                            <br />
                          </Col>
                        </Tab.Pane>

                        <Tab.Pane eventKey="third">
                          <Navbar.Brand>Privacy</Navbar.Brand>
                          <Col>
                          <h6 className= "edit-profile">1. Choose who you want to see your posts</h6>
                            <Form>
                              <Form.Switch
                                type="switch"
                                id="public"
                                label="Public"
                              />
                              <Form.Switch
                                type="switch"
                                id="friends"
                                label="Friends"
                              />
                              <Form.Switch
                                type="switch"
                                id="private"
                                label="Only Me"
                              />
                            </Form>
                            <h6 className= "edit-profile">2. Who can send you friend requests?</h6>
                            <Form>
                              <Form.Switch
                                type="switch"
                                id="friendPublic"
                                label="Everyone"
                              />
                              <Form.Switch
                                type="switch"
                                id="friendFriends"
                                label="Mutual Friends"
                              />
                            </Form>
                            <h6 className= "edit-profile">3. Who can send you messages?</h6>
                            <Form>
                              <Form.Switch
                                type="switch"
                                id="messagePublic"
                                label="Public"
                              />
                              <Form.Switch
                                type="switch"
                                id="messageFriends"
                                label="Friends"
                              />
                              <Form.Switch
                                type="switch"
                                id="messageFoF"
                                label="Mutual Friends"
                              />
                            </Form>
                            <br />
                          </Col>
                        </Tab.Pane>
                      </Tab.Content>
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
