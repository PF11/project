import React, { Component } from "react";
import Home_lt from "../page3/Home_left";
import { Container, Row, Col } from "reactstrap";
import "./home_page.css";
import Home_rt from "./Home_right";
import Home_md from "./Home_middle";
import Navbar_one from "./Navigation.js";

class Home extends Component {
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
            <Col className="col-6">
              <Home_md />
            </Col>
            <Col className="col-3">
              <Home_rt />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
