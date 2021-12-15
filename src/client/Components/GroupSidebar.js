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

function RenderGroups(groups) {
  let count = 0;
  return groups.map((item) => {
    count++;
    if (count < 4) {
      return (
        <ListGroup.Item action as="li">
          {item.group_name}
        </ListGroup.Item>
      );
    }
  });
}

function GroupsSidebar(props) {
  return (
    <>
      <div className="event-side-border">
        <div className="eventSidebar">
          <br />
          <h6 className="your-upcoming-events">Your Groups</h6>

          <ListGroup as="ul">{RenderGroups(props.groups)}</ListGroup>
        </div>
      </div>
      <br />
      <div className="event-side-border">
        <div className="eventSidebar">
          <h6 className="your-upcoming-events">Categories</h6>
          <ListGroup as="ul">
            {RenderCategories(
              props.categories,
              props.selectCategory,
              props.selectedCategory
            )}
          </ListGroup>
        </div>
      </div>
    </>
  );
}

export default GroupsSidebar;
