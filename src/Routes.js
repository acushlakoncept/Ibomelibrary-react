import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./pages/App";
import About from "./pages/About";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;