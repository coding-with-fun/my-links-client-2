import React from "react";
import { Route } from "react-router-dom";

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
