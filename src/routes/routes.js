import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import routes_list from "./routes_list";

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                {routes_list.map((route)=> {
                    return <Route key={route.title} exact path={route.link} component={route.component} />
                })}
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;