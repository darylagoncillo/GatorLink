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
      <div className="footer-containter">
        <h1 style={{ color: "green", textAlign: "center" }}>
          FOOTER GOES HERE for now.
        </h1>
      </div>
    </>
  );
}

export default Footer;
