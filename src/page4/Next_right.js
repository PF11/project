import React, { Component } from "react";
import { Table } from "reactstrap";
import "./next_right.css";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Icon } from "antd";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class Next_rt extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        dataValues: [
          { name: "Withdrawable Balance", value: "10" },
          { name: "Closing Balance", value: "20" },
          { name: "Line Amount", value: "20" },
          { name: "Funds in Clearingt", value: "20" },
          { name: "Multi Deposit Balance", value: "20" },
          { name: "Money Multiplier Balance", value: "20" },
          { name: "Earmarking Amount", value: "20" }
        ]
      }
    };
  }
  render() {
    console.log("length", this.state.data);
    return (
      <div className="next-div">
        <div className="as">
          <p>Account Summary for Account Number</p>
        </div>
        <div className="sa">
          <p>Summary for account</p>
          <Table className="table1" striped>
            <tbody>
              {this.state.data.dataValues.map((key, id) => {
                return (
                  <tr>
                    <td>{key.name}</td>
                    <td>INR</td>
                    <td>{key.value}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="acc-state">
          <div>
            <b>Account Statement</b>
          </div>
          <div className="select-p">
            <FormGroup>
              <Label for="exampleSelect">Select Period:</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Current Month</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Input>
            </FormGroup>
            <Icon type="forward" theme="outlined" />
          </div>
          <div className="two-com">
            <FormGroup>
              <Label for="exampleSelect">Short By:</Label>
              <Input type="select" name="select" id="exampleShort">
                <option>Current Month</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Input>
            </FormGroup>
          </div>
          <div>
            <Table className="table2">
              <thead>
                <tr className="row1">
                  <th>Date</th>
                  <th>Description</th>
                  <th>Withdrawals</th>
                  <th>Deposit</th>
                  <th>Balance</th>
                </tr>
              </thead>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default Next_rt;
