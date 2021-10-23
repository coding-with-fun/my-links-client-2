import React from "react";
import { Route } from "react-router-dom";

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
