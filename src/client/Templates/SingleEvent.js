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
import React, { Component } from "react";
import "../Components/Cards.css";
import Modal from "react-modal";
import { BsArrowLeft, BsThreeDotsVertical } from "react-icons/bs";
import Navigation from "../Components/Navigation";
import EventSidebar from "../Components/EventSidebar";
import data from "../../../event-data.json";

import CardItem from "../Components/EventCard";

export default class Event extends Component {
  constructor(props) {
    super(props);

    const categories = [];

    data.Events.forEach((element) => {
      categories.push(element.category);
    });

    this.state = {
      events: data.Events,
      newEventModal: false,
      selectedCategory: null,
      categories,
    };

    this.toggleCreateModal = this.toggleCreateModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
  }

  toggleCreateModal() {
    this.setState({
      newEventModal: !this.state.newEventModal,
    });
  }

  closeModal() {
    this.setState({
      newEventModal: false,
      eventModal: null,
    });
  }

  openModal(id) {
    this.setState({
      newEventModal: false,
      eventModal: id,
    });
  }

  selectCategory(category) {
    if (this.state.selectedCategory === category) {
      this.setState({
        selectedCategory: null,
      });
    } else {
      this.setState({
        selectedCategory: category,
      });
    }
  }

  render() {
    return (
      <div className="body">
        <Navigation />
        <br />
      </div>
    );
  }
}
