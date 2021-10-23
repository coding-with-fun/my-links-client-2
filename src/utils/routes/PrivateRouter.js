import React from "react";
import { Route } from "react-router-dom";

/**
 *  Router to access private pages only.
 *  @author Harrsh Patel <dev@harrsh.com>
 */
const PrivateRouter = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => {
                return <Component />;
            }}
        />
    );
};

export default PrivateRouter;
