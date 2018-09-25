import React, { Component } from "react";
import "./home_left.css";
import {Link} from 'react-router-dom';

class Home_lt extends Component {
  render() {
    return (
      <div>
        <div className="container1">
          <div class="sidenav">
           <Link to="Next_page"> <div className="side-nav-menu">> View Account Summary</div></Link>
            <div className="side-nav-menu">> Payee List</div>
            <div className="side-nav-menu">> Transfer Funds</div>
            <div className="side-nav-menu">> Update Aadhar</div>
            <div className="side-nav-menu">> Update Contact Details</div>
            <div className="side-nav-menu">> View Download Statement</div>
            <div className="side-nav-menu">> Generate ATM Pin</div>
            <div className="side-nav-menu">> Report Lost/Stolen Card</div>
            <div className="side-nav-menu">> Recharge Mobile/DTH</div>
            <div className="side-nav-menu">> Recharge Paytm Wallet</div>
            <div className="side-nav-menu">> Bill Pay</div>
            <div className="side-nav-menu">> Pay Credit Card Bill</div>
            <div className="side-nav-menu">> Other Payments</div>
            <div className="side-nav-menu">> Standing Instruction</div>
            <div className="side-nav-menu">> Tax Corner/Remit Tax</div>
            <div className="side-nav-menu">> Submit Documents</div>
          </div>
          <div class="sidenav1">
            <div className="side-nav-menu">> Other Sevices And Queries</div>
            <div className="side-nav-menu">> Ask Me</div>
            <div className="side-nav-menu">> Pin related</div>
            <div className="side-nav-menu">> Redeem rewards</div>
            <div className="side-nav-menu">> Other Demand Draft</div>
            <div className="side-nav-menu">> Other Cheque books</div>
            <div className="side-nav-menu">> Update PAN</div>
            <div className="side-nav-menu">> Get a Personal Loan</div>
            <div className="side-nav-menu">> Get a Credit Card</div>
            <div className="side-nav-menu">> Enhanced Security</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home_lt;
