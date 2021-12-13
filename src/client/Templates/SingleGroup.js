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
  Pagination,
} from "react-bootstrap";
import React, { Component } from "react";

import Modal from "react-modal";
import { BsArrowLeft, BsThreeDotsVertical } from "react-icons/bs";
import { RiArrowGoBackLine } from "react-icons/ri";
import Navigation from "../Components/Navigation";

import data from "../../../group-data.json";

import CardItem from "../Components/EventCard";
import GroupSidebar from "../Components/GroupSidebar";

export default class Group extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: data.Groups,
      newGroupModal: false,
      selectedCategory: null,
    };

    this.toggleCreateModal = this.toggleCreateModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  toggleCreateModal() {
    this.setState({
      newGroupModal: !this.state.newGroupModal,
    });
  }

  closeModal() {
    this.setState({
      newGroupModal: false,
      groupModal: null,
    });
  }

  openModal(id) {
    this.setState({
      newGroupModal: false,
      groupModal: id,
    });
  }

  selectCategory(category) {
    if (this.state.selectedCategory === category) {
      this.setState({
        selectedCategory: null,
      });
    }
    this.setState({
      selectedCategory: category,
    });
  }

  render() {
    return (
      <div className="body">
        <Navigation />

        <Container fluid className="page-content">
          <Row>
            <Col md="12" sm="12">
              <Col>
                <Button
                  variant="warning"
                  onClick={() => {
                    this.props.history.push("/Groups");
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <RiArrowGoBackLine />
                    Back to Groups
                  </div>
                </Button>
              </Col>
              <div className="content" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
