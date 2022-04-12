import React from "react";
import { Switch } from 'react-router-dom';
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

import SignIn from '../pages/SignIn'
import SignUp from "../pages/SignUp";
import Route from "./Route";

const Router: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/* <Route path="/" exact component={SignIn} /> */}
    <Route path="/signup"  component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />
    
    {/* <Route path="/dashboard" component={Dashboard} isPrivate /> */}
  </Switch>
);

export default Router;