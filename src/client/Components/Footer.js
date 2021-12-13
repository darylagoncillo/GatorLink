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
      <Container className="footer-container">
        <Row className="footer-row" md={3}>
          <Col className="footer-col-1" sm="6">
            <h6 class="column-1">CSC 642 - Team 3</h6>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
