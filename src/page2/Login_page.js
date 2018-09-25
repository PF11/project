import React, { Component } from "react";
import "./login_page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../page2/Navbar.js";
import { Container, Row, Col } from "reactstrap";
import Login_lt from "./Login_left";
import Login_rt from "./Login_right";

class Login extends Component {
  render() {
    return (
      <div className="container-big">
        <Navbar />
       
          <Row>
            <Col className="left-side" xs="8">
              <Login_lt />
            </Col>
            <Col className="right-side" xs="4">
              <Login_rt />
            </Col>
          </Row>
        
      </div>
    );
  }
}

export default Login;
