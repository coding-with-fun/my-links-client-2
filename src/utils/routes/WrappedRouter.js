import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../../containers/common/About";
import Home from "../../containers/common/Home";
import PageNotFound from "../../containers/common/PageNotFound";
import Pricing from "../../containers/common/Pricing";
import UserDetails from "../../containers/common/UserDetails";
import AccountSettings from "../../containers/private/AccountSettings";
import UserDataManagement from "../../containers/private/UserDataManagement";
import SignIn from "../../containers/public/SignIn";
import SignUp from "../../containers/public/SignUp";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

/**
 *  Index Router where links are switched.
 *  @author Harrsh Patel <dev@harrsh.com>
 */
const WrappedRouter = () => {
    return (
        <Switch>
            <Route exact path="/about">
                <About />
            </Route>

            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/pricing">
                <Pricing />
            </Route>

            <PublicRouter exact path="/signin">
                <SignIn />
            </PublicRouter>

            <PublicRouter exact path="/signup">
                <SignUp />
            </PublicRouter>

            <Route exact path="/:username">
                <UserDetails />
            </Route>

            <PrivateRouter exact path="/:username/settings">
                <AccountSettings />
            </PrivateRouter>

            <PrivateRouter exact path="/:username/edit">
                <UserDataManagement />
            </PrivateRouter>

            <Route path="*">
                <PageNotFound />
            </Route>
        </Switch>
    );
};

export default WrappedRouter;
