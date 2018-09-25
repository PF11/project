import React, { Component } from "react";
import "./home_right.css";
import CitiAdd from '../images/CitiAdd.jpeg';

class Home_rt extends Component {
  render() {
    return (
      <div className="citibank-add">
        <h4>Apply Online</h4>
        <img className="citi-add" src={CitiAdd}/>
      </div>
    );
  }
}

export default Home_rt;
