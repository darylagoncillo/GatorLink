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
  Pagination,
  NavDropdown,
} from "react-bootstrap";
import React, { Component } from "react";

import Modal from "react-modal";

import Navigation from "../Components/Navigation";

import data from "../../../group-data.json";

import CardItem from "../Components/GroupCard";
import GroupSidebar from "../Components/GroupSidebar";

export default class Group extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: data.Groups,
      newGroupModal: false,
      selectedCategory: null,
    };

    this.renderGroups = this.renderGroups.bind(this);
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

  renderGroups() {
    let count = 0;
    return this.state.groups.map((item) => {
      if (
        (this.state.selectedCategory === null ||
          this.state.selectedCategory === item.category) &&
        count < 6
      ) {
        count++;
        return (
          <Col md="4">
            <CardItem
              src={item.img_url}
              history={this.props.history}
              text={item.group_name}
              label={item.members + " Members"}
              group_id={item.group_id}
              attending={item.members}
            />
          </Col>
        );
      }
    });
  }

  render() {
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === 1}>
          {number}
        </Pagination.Item>
      );
    }
    return (
      <div className="body">
        <Navigation />
        <br />
        <Container fluid className="page-content">
          <Row>
            <Col md="3" sm="12">
              <div className="sidebar">
                <GroupSidebar
                  groups={this.state.groups}
                  selectCategory={this.selectCategory}
                />
              </div>
            </Col>

            <Col>
              <div className="content">
                <Navbar bg="light" expand="lg">
                  <Container>
                    <Navbar.Brand href="/">Discover Groups</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ml-auto">
                        <NavDropdown title="Sort By" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">
                            Top
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">
                            This Week
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">
                            This Week
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">
                            Separated link
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
                <Row>
                  <Col>
                    <Button variant="warning" onClick={this.toggleCreateModal}>
                      Create a Group
                    </Button>
                  </Col>

                  <Pagination>{items}</Pagination>
                </Row>

                <Row>{this.renderGroups()}</Row>
                <Modal
                  className="create-modal"
                  shouldCloseOnOverlayClick
                  onRequestClose={this.toggleCreateModal}
                  isOpen={this.state.newGroupModal}
                >
                  {/* <h4>
                    <BsArrowLeft onClick={this.toggleCreateModal} />
                  </h4> */}
                </Modal>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
