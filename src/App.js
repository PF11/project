import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hdfc from "./page1/Hdfc_page";
import Login from "./page2/Login_page";
import Home from "./page3/Home_page";
import Next from "./page4/Next_page";
import Routes from "./Router";
import Person from './api/PersonList';
//import Person from './api/PersonAdd';

class App extends Component {
  render() {
    return <Person />;
  }
}

export default App;
