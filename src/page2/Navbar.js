import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./navbar.css";
class Nav extends Component {
  render() {
    return (
     <div className="nav-div">
    
          <Row>
            <Col className="navbar">
              <h3 className="wel-come">Welcome To Citibank Online</h3>
            </Col>
          </Row>
       
      </div>
    );
  }
}

export default Nav;
