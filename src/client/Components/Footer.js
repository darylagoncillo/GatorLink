import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
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

function Footer(props) {
  return (
    <>
    <div className="main-footer">
      <Container className="footer-container">
        <Row className="footer-row" md={3}>
          <Col className="footer-col-1" md="4">
            <h6 class="column-1">Team 3</h6>
            <h5>
              We are team 3 and we've made an app called GatorLink. The purpose of the app is to design a website that would
              enable SFSU students to connect with one another through an online community.
            </h5>
          </Col>

          <Col className="footer-col-2" md="4">
          <h6 class="column-1">COL 2</h6>
            <ul className="list-unstyled">
              <li>test 1</li>
              <li>test 2</li>
              <li>test 3</li>
            </ul>
      

          </Col>

          <Col className="footer-col-2" md="4">
          <h6 class="column-1">COL 3</h6>
            <ul className="list-unstyled">
              <li>test 1</li>
              <li>test 2</li>
              <li>test 3</li>
            </ul>
      

          </Col>

          
        </Row>

        <Row>
          <Col sm="2">
            &copy;{new Date().getFullYear()} sldkfjlskdfj

          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
}

export default Footer;
