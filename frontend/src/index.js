import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Login from './Component/login'
import SignUp from './Component/signUp'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
       <Route exact path="/login" component={Login} /> 
       <Route exact path="/signUp" component={SignUp} /> 
       <Route exact path="/signUp2" component={SignUp} /> 
       </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
