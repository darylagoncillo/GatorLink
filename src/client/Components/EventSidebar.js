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
} from "react-bootstrap";
import React, { Component } from "react";
import data from "../../../event-data.json";
import CardItem from "./EventCard";

import "./Cards.css";

function EventSidebar(props) {
  return (
    <>
      <div className="event-sidebar">
        <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item />
          <ListGroup.Item action href="/Events">
            Home
          </ListGroup.Item>
          <ListGroup.Item action href="/Events">
            Birthdays
          </ListGroup.Item>
          <ListGroup.Item action href="/Events">
            Notifications
          </ListGroup.Item>
        </ListGroup>
      </div>
      <h6>Your Upcoming Events</h6>
      <p>THU, OCT 28 AT 12PM PST BASKETBALL INTRAMURAL PLAYOFFS</p>
      <h5>Categories</h5>
      <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item action href="/Events">
          Sports
        </ListGroup.Item>
      </ListGroup>
      <ListGroup defaultActiveKey="#link2">
        <ListGroup.Item action href="/Events">
          Music
        </ListGroup.Item>
      </ListGroup>
      <ListGroup defaultActiveKey="#link3">
        <ListGroup.Item action href="/Events">
          Gaming
        </ListGroup.Item>
      </ListGroup>
      <ListGroup defaultActiveKey="#link4">
        <ListGroup.Item action href="/Events">
          Dance
        </ListGroup.Item>
      </ListGroup>
      <ListGroup defaultActiveKey="#link5">
        <ListGroup.Item action href="/Events">
          Art
        </ListGroup.Item>
      </ListGroup>
      <ListGroup defaultActiveKey="#link6">
        <ListGroup.Item action href="/Events">
          Networking
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default EventSidebar;
