import { Button, Container, Row, Col, Form, FormControl} from "react-bootstrap";
import React, { Component } from "react";


import Navigation from "../Components/Navigation";
import Banners from "../Components/HeroContainer";
import Profile from "../Components/Profile";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
      time: "6:48 pm",
      show: true,
      username: "",
      password: ""
    };
  }

  validateForm() {
   return username.length > 0 && password.length > 0;
  }

   handleSubmit(event) {
     event.preventDefault();
   }

  render() {
    return (
      <div className="loginstyling">
        <div className="login">
          <Form >
            <Container >
              <Form.Group size="lg" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                autoFocus
                type="username"
                value={this.state.username}
                onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password"
                value={this.state.password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <a href="/Registration">Forgot your Password?</a>
              </Form.Group>
          
              <Row>
                <Col md={4}>
                  <Button variant="warning" block size="lg" type="submit">Login with SSO</Button>
                </Col>
                <Col md={{ span:4, offset: 3}}>
                  <Button variant="warning" block size="lg" type="submit">Login</Button>
                </Col>
              </Row>
              <p>
                New to GatorLink?
                <Button variant="secondary" size = "sm" type="submit">Sign Up</Button>
              </p> 
            </Container>
          </Form>
        </div>
      </div>
    );
  }
}
