import { createContext, useState } from "react";

/**
 *  Context to handle theme
 *  @author Harrsh Patel <dev@harrsh.com>
 */
export const ThemeContext = createContext();

/**
 *  Provider to handle theme
 *  @author Harrsh Patel <dev@harrsh.com>
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
