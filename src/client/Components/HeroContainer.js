import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.js";
import "./HeroContainer.css";
import eventIcon from "../../images/EventIcon.png";
import groupIcon from "../../images/GroupIcon.png";
import forumIcon from "../../images/ForumIcon.png";
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

function HeroContainer(props) {
  // const handleRoute = () =>{
  //   this.props.history.push("/Groups");
  // }

  return (
    <>
      <div className="hero-container">
        <div className="banner-1">
          <div className="text-wrapper">
            <h1>An online community for students alike</h1>
            <p>
              Connect with thousands of fellow SFSU students online at a touch
              of a button
            </p>
          </div>
          <a href="/">
            <Button className="button-get-started"> Get Started </Button>
          </a>
        </div>
        <div className="banner-2">
          <Container fluid>
            <Row md={3} className="row-1">
              <div class="col-sm-4">
                <Card className="text-center">
                  <Card.Body>
                    <Card.Img
                      className="card-img"
                      variant="top"
                      src={eventIcon}
                    ></Card.Img>
                    <p className="card-titles">Events</p>
                    <Card.Text>
                      Hundreds of events are posted on the daily by SFSU
                      students. These posting provide a way for students to
                      connect both online and offline. The posting's information
                      such as location, date, and time are available on the
                      post's listing.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div class="col-sm-4">
                <Card className="text-center">
                  <Card.Body>
                    <Card.Img
                      className="card-img"
                      variant="top"
                      src={groupIcon}
                    ></Card.Img>
                    <p className="card-titles">Groups</p>
                    <Card.Text>
                      Thousands of SFSU students are able to create and invite
                      others to their group. This feature allows students to
                      create a smaller community where fellow members can
                      connect with one another through similar interests or
                      different interests.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div class="col-sm-4">
                <Card className="text-center">
                  <Card.Body>
                    <Card.Img
                      className="card-img"
                      variant="top"
                      src={forumIcon}
                    ></Card.Img>
                    <p className="card-titles">Forums</p>
                    <Card.Text>
                      Through the use of forums, group members are allowed to
                      communicate with one another about any topic of interest.
                      Members may access these forum threads at any time as well
                      as creating new threads regarding different topics.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Row>

            <Row md={2} className="row-2">
              <Col className="square-1">
                <h5>Online and Offline Events</h5>
                <p className="p-2">
                  Looking to attend events online or offline? Check out our
                  events page full of virtual meetups or in-person events!
                </p>
                <div className="button-location">
                  <a href="/Events">
                    <Button className="button-1"> Browse </Button>
                  </a>
                </div>
              </Col>

              <Col
                className="square-2"
                sm={12}
                md={6}
                // className="d-md-block d-sm-none"
              ></Col>
            </Row>
            <Row md={2} className="row-2">
              <Col
                className="square-3"
                sm={12}
                md={6}
                // className="d-md-block d-xs-none"
              ></Col>

              <Col className="square-4">
                <h5>Find and Meet New Friends</h5>
                <p className="p-2">
                  Explore the site and make new connections. Discover and meet
                  thousands of members in multiple groups.
                </p>
                <div className="button-location">
                  <a href="/Groups">
                    <Button className="button-2"> Discover </Button>
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              {" "}
              <Footer />
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default HeroContainer;
