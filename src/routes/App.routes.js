import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import { HOME, LOGIN, USER_ROUTING } from "../constants/paths";
import { Login } from "../views/Login";
import { UserRoutes } from "./User.routes";

export const AppRoutes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path={LOGIN} component={Login}></Route>
                    <Route path={USER_ROUTING} component={UserRoutes}></Route>
                    {/* <Route path={USER_ROUTING} component={UserRoutes}></Route> */}
                    <Redirect to={LOGIN}></Redirect>
                </Switch>
            </Router>
        </div>
    );
};
