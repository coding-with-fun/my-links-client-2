import React from "react";
import ReactDOM from "react-dom";
import Base from "./Base";
import { AuthenticationProvider } from "./contexts/AuthenticationContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/index.scss";

ReactDOM.render(
    <React.StrictMode>
        <AuthenticationProvider>
            <ThemeProvider>
                <Base />
            </ThemeProvider>
        </AuthenticationProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
