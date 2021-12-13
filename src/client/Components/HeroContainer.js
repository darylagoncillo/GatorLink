import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.js";
import "./HeroContainer.css";
import eventIcon from '../../images/EventIcon.png';
import groupIcon from '../../images/GroupIcon.png';
import forumIcon from '../../images/ForumIcon.png';
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
  return (
    <>
      <div className="hero-container">
        <div className="banner-1">
          <div className="text-wrapper">
            <h1>Turning Ideas into events </h1>
            <p>
              Connect with thousands of fellow SFSU students online at a touch
              of a button
            </p>
          </div>
        </div>
        <div className="banner-2">
          <Container fluid>
            <Row md={3} className="row">
              <div class="col-sm-6">
                <Card className="text-center">
                  <Card.Body>
                  <Card.Img className='card-img' variant="top" src={eventIcon}></Card.Img>
                    <p>Events</p>
                    <Card.Text>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div class="col-sm-6">
                <Card className="text-center">
                  <Card.Body>
                  <Card.Img className='card-img' variant="top" src={groupIcon}></Card.Img>
                    <p>Groups</p>
                    <Card.Text>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div class="col-sm-6">
                <Card className="text-center">
                  <Card.Body>
                  <Card.Img className='card-img' variant="top" src={forumIcon}></Card.Img>
                    <p>Forums</p>
                    <Card.Text>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <p>sdfsdf
                sdfsdfsfdsfddddddddddddddddddddddddddddd
                dsfsdf
              </p>
            </Row>
  
          </Container>
        </div>

        <div className="banner-3">
          <Footer/>
        </div>
      </div>


    </>
  );
}

export default HeroContainer;
