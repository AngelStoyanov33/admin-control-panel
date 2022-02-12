import logo from "../../../logo.svg";
import "../../../App.css";
import React, { Component } from "react";
import { MicrosoftLoginButton } from "react-social-login-buttons";
import Authenticator from "../../service/Authentication/authenticationService";
import { animations } from "react-animation";

class Authetication extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="inner" style={{ animation: animations.popIn }}>
          <img src={logo} className="App-logo" alt="logo" />
          <h3 style={{ animation: animations.bounceIn }}>
            Sporton Admin Panel
          </h3>
          <MicrosoftLoginButton
            style={{ animation: animations.bounceIn }}
            onClick={() =>
              Authenticator.login(() => {
                this.props.history.push("/dashboard");
              })
            }
          ></MicrosoftLoginButton>
        </div>
      </header>
    );
  }
}

export default Authetication;
