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

import { BsFillPersonBadgeFill, BsFillShieldFill } from "react-icons/bs";
import { AiFillBell } from "react-icons/ai";

import CardItem from "./EventCard";
import data from "../../../event-data.json";

import "./Cards.css";

function EPSidebar(props) {
  return (
    <>
      <div className="profile-sidebar">
        <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item action href="/EditProfile">
            <BsFillPersonBadgeFill />
            Edit Profile
          </ListGroup.Item>
        </ListGroup>
        <ListGroup defaultActiveKey="#link2">
          <ListGroup.Item action href="/EditProfile">
            <AiFillBell />
            Notifications
          </ListGroup.Item>
        </ListGroup>
        <ListGroup defaultActiveKey="#link2">
          <ListGroup.Item action href="/EditProfile">
            <BsFillShieldFill />
            Privacy
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}

export default EPSidebar;
