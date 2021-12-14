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
  ListGroup,
  NavDropdown,
  Tab,
  Carousel,
  Tabs,
} from "react-bootstrap";
import React, { Component, useState } from "react";
import "./components.css";

import { FaBasketballBall, FaMusic } from "react-icons/fa";
import { GrBeacon, GrPaint } from "react-icons/gr";

import { BsController } from "react-icons/bs";
import { SiBytedance } from "react-icons/si";

const icons = {
  Sports: <FaBasketballBall />,
  Networking: <GrBeacon />,
  Music: <FaMusic />,
  Art: <GrPaint />,
  Gaming: <BsController />,
  Dance: <SiBytedance />,
};

function RenderCategories(categories, selectCategory, selectedCategory) {
  return categories.map((item) => (
    <ListGroup.Item
      action
      as="li"
      active={selectedCategory === item}
      onClick={() => {
        selectCategory(item);
      }}
    >
      {icons[item]} {item}
    </ListGroup.Item>
  ));
}

function EventSidebar(props) {
  return (
    <>
      <div className="event-side-border">
        <div className="eventSidebar">
          <br />
          <h6 className="your-upcoming-events">Your Upcoming Events</h6>
          <p className="upcoming-title" />
          <Carousel>
            <Carousel.Item variant="dark">
              <img
                className="d-block w-100"
                src="EventPictures/img-1.jpg"
                alt="First slide"
                style={{ height: "210px" }}
              />
              <Carousel.Caption>
                <h3>Basketball Intramural Playoffs</h3>
                <p> THU, OCT 28 AT 12PM PST </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item variant="dark">
              <img
                className="d-block w-100 "
                src="EventPictures/img-2.jpg"
                alt="First slide"
                style={{ height: "210px" }}
              />
              <Carousel.Caption>
                <h3>Job Networking</h3>
                <p> THU, November 4-6 AT 12PM PST </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <br></br>
          <h5 className="categories">Categories</h5>
        </div>
        <ListGroup as="ul">
          {RenderCategories(
            props.categories,
            props.selectCategory,
            props.selectedCategory
          )}
        </ListGroup>
      </div>
    </>
  );
}

export default EventSidebar;
