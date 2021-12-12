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
import React, { Component, useState } from "react";
import data from "../../../event-data.json";
import CardItem from "./EventCard";

import "./Cards.css";

function RenderCategories(categories, selectCategory) {
  return categories.map((item) => (
    <ListGroup.Item
      action
      as="li"
      onClick={() => {
        selectCategory(item);
      }}
    >
      {item}
    </ListGroup.Item>
  ));
}

function EventSidebar(props) {
  return (
    <>
      <div className="event-sidebar">
        <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item action href="#">
            Home
          </ListGroup.Item>
          <ListGroup.Item action href="#">
            Birthdays
          </ListGroup.Item>
          <ListGroup.Item action href="#">
            Notifications
          </ListGroup.Item>
        </ListGroup>
      </div>
      <h6>Your Upcoming Events</h6>
      <p>THU, OCT 28 AT 12PM PST BASKETBALL INTRAMURAL PLAYOFFS</p>
      <h5>Categories</h5>
      <ListGroup as="ul">
        {RenderCategories(props.categories, props.selectCategory)}
      </ListGroup>
    </>
  );
}

export default EventSidebar;
