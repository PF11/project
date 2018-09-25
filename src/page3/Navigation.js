import React, { Component } from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from "reactstrap";
import Index from "../images/index.png";
import "./navigation.css";
import { Link } from "react-router-dom";

class Navbar_one extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <img className="citi-image" src={Index} />
          <Nav className="navitem" tabs>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Banking</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Credit Card</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Investments</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Personal Loan</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Home Loan</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Insurance</NavLink>
            </NavItem>

            <Dropdown
              className="drop-down"
              nav
              isOpen={this.state.dropdownOpen}
              toggle={this.toggle}
            >
              <DropdownToggle nav caret>
                Quick Links
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <form class="form-inline">
              <Link to="/Login_page">
                <button className="btn btn-link" type="submit">
                  Sign Out >
                </button>
              </Link>
            </form>
          </Nav>
        </div>
      </div>
    );
  }
}

export default Navbar_one;
