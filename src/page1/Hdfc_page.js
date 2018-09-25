import React, { Component } from "react";
import "./hdfc_page.css";
import hdfcLogo from "../images/hdfcLogo.png";
class Hdfc extends Component {
  state = {};
  render() {
    return (
      <div className="container-gray">
        <div className="container-blue" />
        <div className="container-white">
          <img className="hdfclogo" src={hdfcLogo} />
          <h1 className="heading">New Customer Journey Chatbot PoC</h1>
        </div>
        <div className="container-b" />
        <div className="container-red" />
      </div>
    );
  }
}

export default Hdfc;
