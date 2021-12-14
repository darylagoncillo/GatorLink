import { Button, Container, Row, Col, Form,  } from "react-bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "../Components/Navigation";
import Banners from "../Components/HeroContainer";
import Profile from "../Components/Profile";

export default class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div className="Registration">
        <h1 >Account Activation</h1>
        <br />
        <h4>Activate your account by using your SFSU credentials</h4>
        <Container>
          <Button 
          className="SFSULoginB"
          variant="warning" 
          size="lg" 
          type="submit"
          >
          SFSU Login
          </Button>

          <Form.Group className="TOSCheck" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I accept GatorLink's Terms of Service and Privacy Policy" />
          </Form.Group>
          
          <Link to="/Questionnaire1">
          <Button
          className="SFSUNEXT"
          variant="warning"
          size="lg"
          type="submit"
          >
            Next
          </Button>
          </Link>

          <Link to="/Login">
          <Button
          className="SFSUAccount"
          variant="secondary"
          size="lg"
          type="submit"
          >
            Already have an account? Log In
          </Button>
          </Link>
        </Container>
        
        
      </div>
    );
  }
}
