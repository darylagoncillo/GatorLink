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
        <div className="footer-container">
          <Row md={3} className="footer-row"> 
            {/* Column1 */}
            <Col>
              <h4>Team 3</h4>
              <ui className="list-unstyled">
                <li>Our team strives to create a safe</li>
                <li>online community for students</li>
                <li>to thrive in.</li>
              </ui>
            </Col>
            {/* Column2 */}
            <Col>
              <h4>Explore Our Website!</h4>
              <ui className="list-unstyled">
                <li>Group Events</li>
                <li>View Groups</li>
              </ui>
            </Col>
            {/* Column3 */}
            <Col>
              <h4>Frequently Asked Questions</h4>
              <ui className="list-unstyled">
                <li>What's the purpose of this app?</li>
                <li>What is there to do on here?</li>
                <li>How to do view and create events?</li>
              </ui>
            </Col>
            <div className="icon-link">
              Icons made by{" "}
              <a
                href="https://www.flaticon.com/authors/fliqqer"
                title="Fliqqer"
              >
                Fliqqer
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </Row>


          <hr />
          <Row className="copyright-row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} CSC | All rights reserved | Terms
              Of Service | Privacy
            </p>
          </Row>
        </div>
      </div>
   
    </>
  );
}

export default Footer;
