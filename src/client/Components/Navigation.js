import React, { Component } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { withRouter } from "react-router";
import "./components.css";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { location } = this.props;
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">GatorLink</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="me-auto my-2 my-lg-0"
                navbarScroll
                activeKey={location.pathname}
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Events">Events</Nav.Link>
                <Nav.Link href="/Groups">Groups</Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                <div style={{ width: "400px" }}>
                  <Select options={options} />
                </div>
              </Nav>
              <Nav className="ml-auto">
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/EditProfile">
                    Edit Profile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default withRouter(Navigation);
