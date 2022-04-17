import React, { Component } from "react";
import { AuthContext } from "./authContext";

import { msalApp, isIE, AUTH_SCOPES } from "./authUtils";

const useRedirectFlow = isIE();

export default (C) =>
  class Authenticator extends Component {
    state = {};

    constructor(props) {
      super(props);
      this.state = {};

      const initialState = {
        error: null,
        isAuthenticated: false,
        account: null,
      };

      this.state = JSON.parse(sessionStorage.getItem("state"))
        ? JSON.parse(sessionStorage.getItem("state"))
        : initialState;
    }

    async onSignIn(redirect) {
      if (redirect) {
        let returnVal = await msalApp.loginRedirect({
          scopes: [AUTH_SCOPES.OPENID, AUTH_SCOPES.PROFILE],
          extraQueryParameters: {
            ui_locales: localStorage.getItem("language") ?? "sv",
          },
        });
        return returnVal;
      }

      const loginResponse = await msalApp.loginRedirect({
        scopes: [AUTH_SCOPES.OPENID, AUTH_SCOPES.PROFILE],
        extraQueryParameters: {
          ui_locales: localStorage.getItem("language") ?? "sv",
        },
      });

      if (loginResponse) {
        this.setState({
          account: loginResponse.account,
          isAuthenticated: true,
          error: null,
        });
      }
    }

    onSignOut() {
      msalApp.logout();
    }

    async componentDidMount() {
      msalApp.handleRedirectCallback((error) => {
        if (error) {
          const errorMessage = error.errorMessage
            ? error.errorMessage
            : "Unable to acquire access token.";
          this.setState({
            error: errorMessage,
          });
        }
      });

      const account = msalApp.getAccount();
      this.setState({
        account,
      });

      const now = Math.round(new Date().getTime() / 1000);

      if (account && account.idToken.exp > now) {
        this.setState({
          isAuthenticated: true,
        });
      }
    }

    render() {
      const authContext = {
        isAuthenticated: this.state.isAuthenticated,
        account: this.state.account,
        error: this.state.error,
        onSignIn: () => this.onSignIn(useRedirectFlow),
        onSignOut: () => this.onSignOut(),
      };

      return (
        <AuthContext.Provider value={authContext}>
          <C {...this.props} />
        </AuthContext.Provider>
      );
    }
  };
