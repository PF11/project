import React, { Component } from "react";
import "./login_left.css";
import { Icon } from "antd";
import { Link } from "react-router-dom";

class Login_lt extends Component {
  render() {
    return (
      <div>
        <form>
        <div className="name-space">
          <label className="label-name" for="name">Enter Your User Id </label>
          <br />
          <Icon type="caret-right" theme="outlined" />
          <input className="first-text" type="text" placeholder="Enter..."  />
          <span className="first-span">
            <Icon className="icon-q" type="question-circle" theme="outlined" />
            <Link className="line" to="/common">
              Forgot Your Password
            </Link>
          </span>
        </div>
        <div className="pass-space">
          <label className="label-name" for="pass">Enter Your Password </label>
          <br />
          <Icon type="caret-right" theme="outlined" />
          <input className="first-text" type="password"  />
          <span className="first-span">
            <Icon className="icon-q" type="question-circle" theme="outlined" />
            <Link className="line" to="/common">
              Forgot Your IPIN
            </Link>
          </span>
        </div>
        <div className="btn-side">
          <Link to="/Home_page">
            <button className="btn" type="submit">
              LOGIN
            </button>
          </Link>
          <span className="click">
            Trouble logging In ?<Link to="/common">Click here!</Link>
          </span>
        </div>
        </form>
      </div>
    );
  }
}

export default Login_lt;
