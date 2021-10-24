import React, { useContext } from "react";
import App from "./App";
import { ThemeContext } from "./contexts/ThemeContext";

/**
 *  @author Harrsh Patel
 */
const Base = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`base__container ${theme}`}>
            <App />
        </div>
    );
};

export default Base;
