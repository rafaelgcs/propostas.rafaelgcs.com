import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { isAuthenticated } from "../services/auth";
import routes_list from "./routes_list";

const PrivateRoute = ({ module: module, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{ pathname: `/${module}/login`, state: { from: props.location } }}
                />
            )
        }
    />
);

const Routes = () => {

    const generateRoute = (route) => {
        if(route.protected) {
            return <PrivateRoute module={route.module} key={route.title} exact path={route.link} component={route.component} />
        }
        return <Route key={route.title} exact path={route.link} component={route.component} />
    }

    return (
        <BrowserRouter>
            <Switch>
                {routes_list.map((route) => {
                    return generateRoute(route)
                })}
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;