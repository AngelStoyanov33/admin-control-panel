import "../../../App.css";
import React, { Component } from "react";
import Sidebar from "../Sidebar/sideBarComponent";
import { Route } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.state);
    const test = (
      <div class="container">
        <h2 style={{ color: "red" }}>Test</h2>
      </div>
    );
    return (
      <React.Fragment>
        <Sidebar content={test} />
        <Route path="/dashboard/test" />
      </React.Fragment>
    );
  }
}

export default Dashboard;
