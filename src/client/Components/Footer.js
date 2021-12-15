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

import Home from "../Templates/Home";
import Events from "../Templates/Events";
import Groups from "../Templates/Groups";

function Footer(props) {
  return (
    <>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            CSC 656<span> Team 3</span>
          </h3>

          <p class="footer-links">
            <a href="/Events">Events</a> | <a href="/Groups">Groups</a>
          </p>

          <div className="icon-link">
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/fliqqer" title="Fliqqer">
              Fliqqer
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>

          <p class="footer-team-name">
            © 2021 CSC 656 Team 3 | All rights reserved | Terms of Service{" "}
          </p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>Contact Us</p>
          </div>

          <div>
            <i class="email-content"></i>
            <p>
              <a href="mailto:support@eduonix.com">jcastan6@mail.sfsu.edu</a>
            </p>
          </div>
          <div>
            <i class="email-content"></i>
            <p>
              <a href="mailto:support@eduonix.com">dagoncillo@mail.sfsu.edu</a>
            </p>
          </div>
          <div>
            <i class="email-content"></i>
            <p>
              <a href="mailto:support@eduonix.com">eafridi@mail.sfsu.edu</a>
            </p>
          </div>
          <div>
            <i class="email-content"></i>
            <p>
              <a href="mailto:support@eduonix.com">sdang4@mail.sfsu.edu</a>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-about-section">
            <span>About the team</span>
            We are Team 3 in CSC 656-02. We've created an app geared towards
            SFSU students. Our app will serve as a safe online commmunity for
            any SFSU student to use.{" "}
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
