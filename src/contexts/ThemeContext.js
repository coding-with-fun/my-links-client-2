import { createContext, useState } from "react";

/**
 *  @author Harrsh Patel
 *  Context to handle theme
 */
export const ThemeContext = createContext();

/**
 *  @author Harrsh Patel
 *  Provider to handle theme
 */
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const themeToSet = theme === "light" ? "dark" : "light";
        setTheme(themeToSet);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,

                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
