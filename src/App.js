import "./App.css";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Authetication from "./assets/component/Authentication/authenticationComponent";
import Dashboard from "./assets/component/Dashboard/dashboardComponent";
import ProtectedRoute from "./assets/component/Dashboard/protectedDashbordRoute";
import NotFound from "./assets/component/NotFound/notFoundComponent";
import Authenticator from "./assets/service/Authentication/authenticationService";
import OSMComponent from "./assets/component/Dashboard/OSMComponent/osmComponent";
import VersionControlComponent from "./assets/component/Dashboard/VersionControlComponent/versionControlComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Authetication} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <ProtectedRoute
            exact
            path="/dashboard/grafana"
            component={() => {
              window.location.href = process.env.REACT_APP_GRAFANA_URL;
              return null;
            }}
          />
          <ProtectedRoute
            exact
            path="/dashboard/prometheus"
            component={() => {
              window.location.href = process.env.REACT_APP_PROMETHEUS_URL;
              return null;
            }}
          />
          <ProtectedRoute
            exact
            path="/dashboard/map"
            component={OSMComponent}
          />
          <ProtectedRoute
            exact
            path="/dashboard/git"
            component={VersionControlComponent}
          />
          <ProtectedRoute
            exact
            path="/dashboard/k8s"
            component={() => {
              window.location.href = process.env.REACT_APP_K8S_PORTAL_URL;
              return null;
            }}
          />
          {/*<Route path="/404" component={NotFound} />
  <Redirect from="*" to="/404" />*/}
        </Switch>
      </Router>
    </div>
  );
}

export default Authenticator(App);
