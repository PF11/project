import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./next_page.css";
import Navbar_one from "../page3/Navigation.js";
import Home_lt from "../page3/Home_left";
import Next_rt from "./Next_right";

class Next extends Component {
  render() {
    return (
      <div>
        <Navbar_one />
        <Container className="left-part">
          <Row>
            <Col className="col2">Welcome</Col>
          </Row>
          <Row>
            <Col className="col-3">
              <Home_lt />
            </Col>
            <Col className="col-9">
              <Next_rt />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Next;
