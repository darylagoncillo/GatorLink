import { Button, Container, Row, Col, Form } from "react-bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "../Components/Navigation";
import Banners from "../Components/HeroContainer";
import Profile from "../Components/Profile";

export default class Questionnaire1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
      time: "6:48 pm",
      show: true,
      firstName: "",
      middleName: "",
      lastName: ""
    };

    // onSubmit(event => {
    //    username = event.target.username,
    //    password = event.target.password
    // })
  }

  render() {
    return (
      <div className="Questionnaire1">
        <h2 className="QuestionH2">Personal Information</h2>
        <br />
        <h5 className="QuestionH5">All fields below are optional and can be skipped</h5>
        <br />
        <Form >
            <Container >
              <Form.Group size="lg" controlId="FirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                autoFocus
                type="FirstName"
                value={this.state.firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="MiddleName">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control 
                type="MiddleName"
                value={this.state.middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="LastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                type="LastName"
                value={this.state.lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
          
              <Row>
                <Col md={4}>
                  <Link to="/Questionnaire2">
                  <Button variant="warning" block size="lg" type="submit" className="QuestionNEXT">Next</Button>
                  </Link>
                </Col>
                <Col md={4}>
                  <Link to="/">
                  <Button variant="secondary" block size="lg" type="submit" className="QuestionSKIP">Skip</Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Form>
      </div>
    );
  }
}
