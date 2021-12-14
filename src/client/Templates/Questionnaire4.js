import { Button, Container, Row, Col, Form } from "react-bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "../Components/Navigation";
import Banners from "../Components/HeroContainer";
import Profile from "../Components/Profile";

export default class Questionnaire4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
      time: "6:48 pm",
      show: true,
    };

    // onSubmit(event => {
    //    username = event.target.username,
    //    password = event.target.password
    // })
  }

  render() {
    return (
      <div className="Questionnaire1">
        <h1>Account Successfully Activated!</h1>
        <br />
        <h4>Please click continue below to be redirected to your account.</h4>
        <br />
        <Form >
            <Container >          
              <Row>
                <Col md={4}>
                <Link to="/">
                  <Button variant="warning" block size="lg" type="submit">Default for now, change to profile editor when finished.</Button>
                  </Link>
                </Col>
                <Col md={4}>
                <Link to="/">
                  <Button variant="secondary" block size="lg" type="submit">Back to Home</Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Form>
      </div>
    );
  }
}
