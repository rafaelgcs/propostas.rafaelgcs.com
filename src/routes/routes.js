import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components";
import LandingPage from "views/LandingPage/LandingPage";
import ProfilePage from "views/ProfilePage/ProfilePage";
import LoginPage from "views/LoginPage/LoginPage";
import HomePage from "modules/landing_page/LandingPage";

var hist = createBrowserHistory();

const routes = (
    <Switch>
        <Route path="/doc/landing-page" component={LandingPage} />
        <Route path="/doc/profile-page" component={ProfilePage} />
        <Route path="/doc/login-page" component={LoginPage} />
        <Route path="/doc/components" component={Components} />
        <Route path="/" component={HomePage} />
    </Switch>
)

export default routes;