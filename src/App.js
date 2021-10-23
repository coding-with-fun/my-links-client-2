import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import WrappedRouter from "./utils/routes/WrappedRouter";

/**
 *  @author Harrsh Patel
 */
const App = () => {
    return (
        <Router>
            <Navbar />

            <WrappedRouter />
        </Router>
    );
};

export default App;
