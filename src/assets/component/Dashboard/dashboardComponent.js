import "../../../App.css";
import React, { Component } from "react";
import Sidebar from "../Sidebar/sideBarComponent";
import Typography from "@mui/material/Typography";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const content = (
      <React.Fragment>
        <div>
          <Typography sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
            Welcome to the Sporton Developer Dashboard
          </Typography>
        </div>
      </React.Fragment>
    );
    return (
      <React.Fragment>
        <Sidebar content={content} />
      </React.Fragment>
    );
  }
}

export default Dashboard;
