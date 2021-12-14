import React, { Component } from "react";
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
import editIcon from "../../images/EditIcon2.png";
import eventsIcon from "../../images/ProfileEventsIcon.png";
import profilePicture from "../../images/profile-img.jpg";
import Footer from "./Footer";
import data from "../../../event-data.json";
import data2 from "../../../group-data.json";
import CardItem from "../Components/EventCard";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: data.Events,
      groups: data2.Groups,
      selectedCategory: null,
    };
    this.renderEvents = this.renderEvents.bind(this);
    this.renderGroups = this.renderGroups.bind(this);
  }

  renderEvents() {
    let count = 0;
    return this.state.events.map((item) => {
      if (
        (this.state.selectedCategory === null ||
          this.state.selectedCategory === item.category) &&
        count < 4
      ) {
        count++;
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

  renderGroups() {
    let count = 0;
    return this.state.groups.map((item) => {
      if (
        (this.state.selectedCategory === null ||
          this.state.selectedCategory === item.category) &&
        count < 3
      ) {
        count++;
        return (
          <Col md="4">
            <CardItem
              src={item.img_url}
              history={this.props.history}
              text={item.group_name}
              label={item.members + " Members"}
              group_id={item.group_id}
              attending={item.members}
            />
          </Col>
        );
      }
    });
  }

  render() {
    return (
      <div>
        <div className="body">
          <div className="content-wrap">
            <Container fluid className="page-content">
              <Row className="mega-row">
                <Col md="3" sm="12" xs="12">
                  <div className="sidebar">
                    <div className="event-sidebar" />
                    <div className="box-1">
                      <h5>
                        Profile
                        <a href="/EditProfile">
                          <img className="edit-icon" src={editIcon} />
                        </a>
                      </h5>
                      <div className="list-group">
                        <Card className="text-center-1">
                          <Card.Body>
                            <Card.Img
                              className="profile-img"
                              variant="top"
                              src={profilePicture}
                            />
                            <p>Name</p>
                            <Card.Text>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam, eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                      <div className="box-1">
                        <h5>Social Media Handles</h5>
                      </div>

                      <div className="list-group">
                        <Card className="card-2">
                          <a
                            href="/Events"
                            data-rb-event-key="/Events"
                            className="list-group-item list-group-item-action"
                          >
                            Twitter
                          </a>
                          <a
                            href="/Groups"
                            data-rb-event-key="/Groups"
                            className="list-group-item list-group-item-action"
                          >
                            Instagram
                          </a>

                          <a
                            href="/Events"
                            data-rb-event-key="/Events"
                            className="list-group-item list-group-item-action"
                          >
                            Snapchat
                          </a>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="9" sm="12" xs="12">
                  <div className="content">
                    <Navbar bg="light" expand="lg">
                      <Container>
                        <Navbar.Brand href="/">
                          Discover {this.state.selectedCategory} Events
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Button
                          onClick={() => this.props.history.push("/Events")}
                        >
                          More Events
                        </Button>
                      </Container>
                    </Navbar>

                    <br />
                    <Row>{this.renderEvents()}</Row>
                  </div>
                  <br></br>
                  <div className="content">
                    <Navbar bg="light" expand="lg">
                      <Container>
                        <Navbar.Brand href="/">
                          Discover {this.state.selectedCategory} Events
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Button
                          onClick={() => this.props.history.push("/Groups")}
                        >
                          More Groups
                        </Button>
                      </Container>
                    </Navbar>

                    <br />
                    <Row>{this.renderGroups()}</Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
