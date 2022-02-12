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
import { ProtectedRoute } from "./assets/component/Dashboard/protectedDashbordRoute";
import NotFound from "./assets/component/NotFound/notFoundComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Authetication} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          {/*<Route path="/404" component={NotFound} />
  <Redirect from="*" to="/404" />*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
