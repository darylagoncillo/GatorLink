import { Button, Container, Row, Col, Form } from "react-bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "../Components/Navigation";
import Banners from "../Components/HeroContainer";
import Profile from "../Components/Profile";

export default class Questionnaire3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
      time: "6:48 pm",
      show: true,
      question1: "",
      question2: "",
      question3: ""
    };

    // onSubmit(event => {
    //    username = event.target.username,
    //    password = event.target.password
    // })
  }

  render() {
    return (
      <div className="Questionnaire3">
        <h2 className="QuestionH2">Profile Questionnaire</h2>
        <br />
        <h5 className="QuestionH5">All fields below are optional and can be skipped</h5>
        <br />
        <Form >
            <Container >
              <Form.Group size="lg" controlId="Question1">
                <Form.Label>Question 1: What's your favorite class taken?</Form.Label>
                <Form.Control
                autoFocus
                type="Question1"
                value={this.state.Question1}
                onChange={(e) => setQuestion1(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="Question2">
                <Form.Label>Question 2: What is your favorite social club on campus?</Form.Label>
                <Form.Control 
                type="Question2"
                value={this.state.Question2}
                onChange={(e) => setQuestion2(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="Question3">
                <Form.Label>Question 3: What's your xxxxx</Form.Label>
                <Form.Control 
                type="Question3"
                value={this.state.Question3}
                onChange={(e) => setQuestion3(e.target.value)}
                />
              </Form.Group>
          
              <Row>
                <Col md={4}>
                    <Link to="/Questionnaire4">
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
