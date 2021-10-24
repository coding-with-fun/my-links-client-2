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

            <div className="app__container">
                <WrappedRouter />
            </div>
        </Router>
    );
};

export default App;
