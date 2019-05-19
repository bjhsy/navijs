import React from "react";
import { Switch, Redirect, Route } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import About from "./views/About";

export default function() {
  return (
    <Router>
      <Switch>
        <Redirect path="/" exact to={{ pathname: "/about" }} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}
