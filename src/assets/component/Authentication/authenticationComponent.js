import logo from "../../../logo.svg";
import "../../../App.css";
import React, { Component } from "react";
import { MicrosoftLoginButton } from "react-social-login-buttons";
import { AuthContext } from "../../service/Authentication/authContext";
import { animations } from "react-animation";

class Authetication extends Component {
  render() {
    const auth = this.context;
    return (
      <header className="App-header">
        <div className="inner" style={{ animation: animations.popIn }}>
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <br />
          <h3 style={{ animation: animations.bounceIn }}>
            Sporton Admin Panel
          </h3>
          <MicrosoftLoginButton
            style={{ animation: animations.bounceIn }}
            onClick={() => auth.onSignIn()}
          ></MicrosoftLoginButton>
          {auth.isAuthenticated ? this.props.history.push("/dashboard") : null}
        </div>
      </header>
    );
  }
}
Authetication.contextType = AuthContext;

export default Authetication;
