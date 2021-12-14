import { Button, Container, Row, Col, Form } from "react-bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "../Components/Navigation";
import Banners from "../Components/HeroContainer";
import Profile from "../Components/Profile";

export default class Questionnaire2 extends Component {
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
      <div className="Questionnaire2">
        <h1>Pro Information</h1>
        <br />
        <h4>All fields below are optional and can be skipped</h4>
        <Form >
            <Container >
              <Form.Group controlId="formFile" className="formFile">
                <Form.Label>Upload an image of yourself</Form.Label>
                <Form.Control type="file"  />
              </Form.Group>
              <Form.Group className="Biography" controlId="BiographyText">
                <Form.Label>Biography</Form.Label>
                <Form.Control as="BiographyText" rows={3} />
               </Form.Group>
          
              <Row>
                <Col md={4}>
                    <Link to="/Questionnaire3">
                    <Button variant="warning" block size="lg" type="submit">Next</Button>
                    </Link>                  
                </Col>

                <Col md={4}>
                <Link to="/">
                  <Button variant="secondary" block size="lg" type="submit">Skip</Button>
                </Link>
                </Col>
              </Row>
            </Container>
          </Form>
      </div>
    );
  }
}
