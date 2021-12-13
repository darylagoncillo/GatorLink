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
} from "react-bootstrap";
import React, { Component } from "react";
import "../Components/Cards.css";
import Modal from "react-modal";
import { BsArrowLeft, BsThreeDotsVertical } from "react-icons/bs";
import Navigation from "../Components/Navigation";
import EventSidebar from "../Components/EventSidebar";
import data from "../../../event-data.json";
import EPSidebar from "../Components/EPSidebar";

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
          <Row>
            <Col md="3" sm="12" xs="12">
              <div className="sidebar">
                <EPSidebar />
              </div>
            </Col>

            <Col Col md="9" sm="12" xs="12">
              <div className="content">
                <Navbar bg="light" expand="lg">
                  <Container>
                    <Navbar.Brand href="/EditProfile">
                      Edit {this.state.selectedCategory} Profile
                      <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item action href="/EditProfile">
                          General
                        </ListGroup.Item>
                      </ListGroup>
                      <ListGroup defaultActiveKey="#link2">
                        <ListGroup.Item action href="/EditProfile">
                          Interests
                        </ListGroup.Item>
                      </ListGroup>
                      <ListGroup defaultActiveKey="#link2">
                        <ListGroup.Item action href="/EditProfile">
                          Extracurricular
                        </ListGroup.Item>
                      </ListGroup>
                    </Navbar.Brand>
                  </Container>
                </Navbar>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
