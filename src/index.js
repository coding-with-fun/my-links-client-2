import React from "react";
import ReactDOM from "react-dom";
import Base from "./Base";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/index.scss";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <Base />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
