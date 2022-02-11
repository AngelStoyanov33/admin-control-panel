import React, { Component } from "react";
import { config } from "../../../config";
import { PublicClientApplication } from "@azure/msal-browser";

class Authenticator extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {};

    const initialState = {
      error: null,
      isAuthenticated: false,
      user: {},
    };

    this.state = JSON.parse(sessionStorage.getItem("state"))
      ? JSON.parse(sessionStorage.getItem("state"))
      : initialState;

    this.login = this.login.bind(this);

    const config_ = {
      auth: {
        clientId: config.appId,
        redirectUri: config.redirectUri,
        authority: config.authority,
      },
      cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true,
      },
    };

    this.publicClientApplication = new PublicClientApplication(config_);
  }
  async login(callback) {
    try {
      const user = await this.publicClientApplication.loginPopup({
        scopes: config.scopes,
        prompt: "select_account",
      });

      this.state.isAuthenticated = true;
      this.state.user = user;

      sessionStorage.setItem("state", JSON.stringify(this.state));

      callback();
    } catch (error) {
      this.state({
        error: error,
        isAuthenticated: false,
        user: {},
      });
    }
  }

  logout() {
    this.publicClientApplication.logoutPopup();
  }

  isAuthenticated() {
    return this.state.isAuthenticated;
  }

  getUser() {
    return this.isAuthenticated() ? this.state.user : null;
  }
}

export default new Authenticator();
