import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Authetication from "./assets/component/Authentication/authenticationComponent";
import Dashboard from "./assets/component/Dashboard/dashboardComponent";
import { ProtectedRoute } from "./assets/component/Dashboard/protectedDashbordRoute";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" component={Authetication} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
