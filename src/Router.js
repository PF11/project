import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import App from "./App";
import Home from "./page3/Home_page";
import Login from "./page2/Login_page";
import Next from "./page4/Next_page";
import Task from "./Task";
import Common from './common';

export default class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
  
        <div>
          <Route exact path="/Login_page" component={Login} />,
          <Route path="/Home_page" component={Home} />
          <Route path="/Next_page" component={Next}/>
          <Route path="/Task" component={Task}/>
          <Route path="/common" component={Common}/>
          
        </div>
     
      </BrowserRouter>
    );
  }
}
