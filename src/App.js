import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import WrappedRouter from "./utils/routes/WrappedRouter";

/**
 *  @author Harrsh Patel
 */
const App = () => {
    return (
        <Router>
            <WrappedRouter />
        </Router>
    );
};

export default App;
