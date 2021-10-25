import React from "react";
import ReactDOM from "react-dom";
import Base from "./Base";
import { AuthenticationProvider } from "./contexts/AuthenticationContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserDataProvider } from "./contexts/UserDataContext";
import "./styles/index.scss";

ReactDOM.render(
    <React.StrictMode>
        <AuthenticationProvider>
            <ThemeProvider>
                <UserDataProvider>
                    <Base />
                </UserDataProvider>
            </ThemeProvider>
        </AuthenticationProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
