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

import "./Cards.css";

function RenderGroups(groups, selectGroup) {
  // return groups.map((item) => (
  //   <ListGroup.Item
  //     action
  //     as="li"
  //     onClick={() => {
  //       selectGroup(item);
  //     }}
  //   >
  //     {item}
  //   </ListGroup.Item>
  // ));
}

function GroupSidebar(props) {
  return (
    <>
      <div className="event-sidebar">
        <h6>Your Upcoming Events</h6>
        <p>THU, OCT 28 AT 12PM PST BASKETBALL INTRAMURAL PLAYOFFS</p>
        <h5>Categories</h5>
      </div>
      <ListGroup as="ul">
        {RenderGroups(props.groups, props.selectGroup)}
      </ListGroup>
    </>
  );
}

export default GroupSidebar;
