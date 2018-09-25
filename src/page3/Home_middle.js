import React, { Component } from "react";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import { Table } from "reactstrap";
import "./home_middle.css";

class Home_md extends Component {
  render() {
    return (
      <div className="middle-container">
        <div className="first-div">Net Relationship Value For Aug</div>
        <div className="second-div">
          <b>Account Summary</b>
        </div>
        <div>
          <Table className="table1" striped>
            <tbody>
              <tr>
                <th>Balance Summary</th>
                <th>Currency</th>
                <th>Assets</th>
                <th>Liabilities</th>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Home_md;
