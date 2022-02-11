import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import Authenticator from "../../service/Authentication/authenticationService";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Authenticator.isAuthenticated()) {
          return <Component {...rest} />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};
