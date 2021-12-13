import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
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
import profilePicture from "../../images/profile-img.jpg";
import eventData from "../../../event-data.json";
import groupData from "../../../group-data.json";

function Profile(props) {
  return (
    <div className="body">
      <Container fluid className="page-content">
        <div className="row">
          <Col md="3" sm="12" xs="12">
            <div className="sidebar">
              <div className="event-sidebar" />
              <div className="box-1">
                <h5>Profile</h5>
                <div className="list-group">
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Img
                        className="card-img"
                        variant="top"
                        src={profilePicture}
                      />
                      <p>Name</p>
                      <Card.Text>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="box-1">
                  <h5>Shortcuts</h5>
                </div>

                <div className="list-group">
                  <Card className="card-2">
                    <a
                      href="/Events"
                      data-rb-event-key="/Events"
                      className="list-group-item list-group-item-action"
                    >
                      Events
                    </a>
                    <a
                      href="/Groups"
                      data-rb-event-key="/Groups"
                      className="list-group-item list-group-item-action"
                    >
                      Groups
                    </a>

                    <a
                      href="/Events"
                      data-rb-event-key="/Events"
                      className="list-group-item list-group-item-action"
                    >
                      Friends
                    </a>
                  </Card>
                </div>
                <div className="box-1">
                  <h5>Social Media Handles</h5>
                </div>
                <div className="list-group">
                  <a
                    href="/Events"
                    data-rb-event-key="/Events"
                    className="list-group-item list-group-item-action"
                  >
                    Twitter
                  </a>
                </div>
                <div className="list-group">
                  <a
                    href="/Events"
                    data-rb-event-key="/Events"
                    className="list-group-item list-group-item-action"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col md="9" sm="12" xs="12">
            <div className="content">
              <Navbar bg="light" expand="lg">
                <Container>
                  <Navbar.Brand href="/">Events</Navbar.Brand>
                  <Button className="eventButton">More Events</Button>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" />
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              <div className="row">
                <div className="col-sm-4">
                  <Card className="profile-card">
                    <Card.Body>
                      <p>Events</p>
                      <Card.Text>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-sm-4">
                  <Card className="profile-card">
                    <Card.Body>
                      <p>Events</p>
                      <Card.Text>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-sm-4">
                  <Card className="profile-card">
                    <Card.Body>
                      <p>Events</p>
                      <Card.Text>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-4">
                  <Card className="profile-card">
                    <Card.Body>
                      <p>Events</p>
                      <Card.Text>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-sm-4">
                  <Card className="profile-card">
                    <Card.Body>
                      <p>Events</p>
                      <Card.Text>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-sm-4">
                  <Card className="profile-card">
                    <Card.Body>
                      <p>Events</p>
                      <Card.Text>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>

              <div className="container-2">
                <Navbar bg="light" expand="lg">
                  <Container>
                    <Navbar.Brand href="/">Groups</Navbar.Brand>
                    <Button className="eventButton">Find Groups</Button>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ml-auto" />
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
                <div className="row">
                  <div className="col-sm-4">
                    <Card className="profile-card">
                      <Card.Body>
                        <p>Events</p>
                        <Card.Text>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>

                  <div className="col-sm-4">
                    <Card className="profile-card">
                      <Card.Body>
                        <p>Events</p>
                        <Card.Text>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>

                  <div className="col-sm-4">
                    <Card className="profile-card">
                      <Card.Body>
                        <p>Events</p>
                        <Card.Text>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
}

export default Profile;
