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
  Tab,
  Tabs,
  ListGroup,
} from "react-bootstrap";
import React, { Component } from "react";
import "../Components/SingleEvent.css";
import { RiArrowGoBackLine } from "react-icons/ri";
import Navigation from "../Components/Navigation";
import data from "../../../event-data.json";

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
      <div className="singleEventbody">
        <Navigation />

        <Container fluid className="page-content">
          <Row className="justify-content-md-center ">
            <Col md="8" sm="12">
              <Button
                className="back-to-events"
                variant="warning"
                onClick={() => {
                  this.props.history.push("/Events");
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RiArrowGoBackLine />
                  Back to Events
                </div>
              </Button>

              <div className="content">
                <Col xs={5} md={5}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Header />
                    <Card.Img variant="top" src="/EventPictures/img-1.jpg" />
                    <Card.Body>
                      <Card.Title>Intramural Basketball</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Thursday, October 28
                      </Card.Subtitle>
                      <Card.Text>
                        Playoffs have begun! Support your peers this week at the
                        Mashouf Wellness Center at 12PM for the first round of
                        the Basketball Intramural Playoffs.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <row>
                    <p />
                  </row>
                  <Card className="single-mutuals" style={{ width: '18rem' }}>
                    <Card.Header>Mutuals</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>32 Going</ListGroup.Item>
                      <ListGroup.Item>23 Interested</ListGroup.Item>
                      <ListGroup.Item>30 Not Going</ListGroup.Item>
                    </ListGroup>
                  </Card>
                  <br />
                </Col>
                <Col>
                  <button type="button" className="btn btn-primary float-right">
                    Going
                  </button>
                  <button type="button" className="btn btn-primary float-right">
                    Not Interested
                  </button>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
