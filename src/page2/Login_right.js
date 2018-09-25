import React, { Component } from "react";
import "./login_right.css";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import timer from "../images/timer.png";
import user from "../images/user.png";
import mobile from "../images/mobile.jpg";
import verified from "../images/verified.jpg";

class Login_rt extends Component {
  state = {};
  render() {
    return (
      <div className="right-add">
        <div className="first-part">
          <Link to="/task">
            <button className="btn-on" type="submit">
              View Online Demo >
            </button>
          </Link>
          <div>
            <img className="right-img" src={timer} />
            <Link to="/task"> Get User ID with existing IPIN >></Link>
            <br />
            <p />
          </div>
        </div>
        <div className="second-part">
          <img className="right-img" src={user} />
          <Link to="/task">First Time User >></Link>
          <p />
        </div>
        <div className="third-part">
          <img className="right-img" src={mobile} />
          <Link to="/task">Important Information</Link>
          <p />
          <Link className="know" to="/task">
            Know more >>
          </Link>
        </div>
        <img className="right-img-bottom" src={verified} />
      </div>
    );
  }
}

export default Login_rt;
