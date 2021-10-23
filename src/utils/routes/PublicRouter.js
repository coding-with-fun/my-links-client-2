import React from "react";
import { Route } from "react-router-dom";

/**
 *  Router to access public pages only.
 *  @author Harrsh Patel <dev@harrsh.com>
 */
const PublicRouter = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => {
                return <Component />;
            }}
        />
    );
};

export default PublicRouter;
