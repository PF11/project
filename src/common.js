import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Common_p extends Component {
  state = {};
  render() {
    return (
      <div>
        <textarea type="text" />
        <Link to=""><button type="submit">Okay</button></Link>
      </div>
    );
  }
}

export default Common_p;
