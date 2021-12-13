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
import data from "../../../event-data.json";
import data2 from "../../../group-data.json";

const events = [];
data.Events.map((item) => {
  events.push({
    label: item.event_name + " - " + item.date,
    value: item.event_name,
  });
});
const groups = [];
data2.Groups.map((item) => {
  groups.push({ label: item.group_name, value: item.group_name });
});
const options = [
  {
    label: "Events",
    options: events,
  },
  {
    label: "Groups",
    options: groups,
  },
];

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      menuOpen: false,
    };
    this.search = this.search.bind(this);
  }

  search() {
    this.props.history.push("/Search");
  }

  onChange = (selectedOption) => {
    this.setState({ searchValue: selectedOption });
    console.log("Option selected:", selectedOption);
  };

  change = (event) => {
    console.log(event);

    if (event === "") {
      this.setState({ searchValue: event, menuOpen: false });
    } else {
      this.setState({ searchValue: event, menuOpen: true });
    }
  };

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
                <div className="search-bar">
                  <Form onSubmit={this.search}>
                    <Select
                      onInputChange={(event) => this.change(event)}
                      value={this.state.searchValue}
                      onChange={this.onChange}
                      options={options}
                      menuIsOpen={this.state.menuOpen}
                      placeholder="Search"
                    />
                  </Form>
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
