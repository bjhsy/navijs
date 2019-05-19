import React from "react";
import { Switch, Redirect, Route } from "react-router";
import { HashRouter as Router } from "react-router-dom";

export default function() {
  return (
    <Router>
      <Switch>
        <Redirect path="/" exact to={{ pathname: "/ledger/list" }} />
      </Switch>
    </Router>
  );
}
