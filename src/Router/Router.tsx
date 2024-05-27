
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {LoginPage} from '../pages/LoginPage/LoginPage';
import {RegistrationPage} from '../pages/ProfilePage/ProfilePage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/"  element={LoginPage} />
        <Route path="/register" element={RegistrationPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
