import { React, Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../service/Authentication/authContext";
import axios from "axios";
import { msalApp, AUTH_REQUESTS } from "../../service/Authentication/authUtils";

const api = axios.create({
  baseURL: process.env.REACT_APP_APIGW_URL,
});

class ProtectedRoute extends Component {
  state = {
    jwt: null,
    accountRole: null,
    account: null,
  };

  constructor(props, component, ...rest) {
    super(props);
    this.state = {
      component: component,
      rest: rest,
    };
  }

  componentDidMount() {
    const auth = this.getAuth();
    if (this.state.jwt == null) {
      msalApp
        .acquireTokenSilent(AUTH_REQUESTS.REFRESH_TOKEN)
        .then((loginResponse) => {
          if (loginResponse) {
            let jwt = loginResponse.idToken.rawIdToken;
            this.setState({ jwt: jwt, account: auth.account });
            localStorage.setItem("AD-IdToken", jwt);
            if (
              auth.account != null &&
              auth.account.accountIdentifier !== undefined &&
              (this.state.jwt !== undefined || this.state.jwt != null)
            ) {
              api
                .get("/user/" + auth.account.accountIdentifier, {
                  headers: {
                    Authorization: "Bearer " + this.state.jwt,
                  },
                })
                .catch(function (error) {
                  console.log(error.toJSON());
                })
                .then((response) => {
                  auth.setAccountRole(response.data.role);
                  this.setState({ accountRole: response.data.role });
                });
            }

            return true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  async getAuth() {
    return this.context;
  }

  render() {
    const auth = this.context;
    let protRoute = <Route {...this.props} render={this.state.component} />;
    let redirect = (
      <Redirect to={{ pathname: "/", state: { from: this.props.location } }} />
    );

    if (auth.isAuthenticated) {
      if (this.state.accountRole === "USER") {
        auth.onSignOut();
        return redirect;
      }
      console.log(auth);
      return protRoute;
    } else {
      return redirect;
    }
  }
}

ProtectedRoute.contextType = AuthContext;
export default ProtectedRoute;
