import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router';
import App from './pages/App';
import About from './pages/About';

const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Route exact path="/about" component={About} />
    <Route exact path="/" component={App} />
  </Router>
);

export default Routes;
