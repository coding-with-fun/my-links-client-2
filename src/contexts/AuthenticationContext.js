import { createContext } from "react";

/**
 *  Context to handle authentication.
 *  @author Harrsh Patel <dev@harrsh.com>
 */
export const AuthenticationContext = createContext();

/**
 *  Provider to handle authentication.
 *  @author Harrsh Patel <dev@harrsh.com>
 */
export const AuthenticationProvider = ({ children }) => {
    return (
        <AuthenticationContext.Provider value={{}}>
            {children}
        </AuthenticationContext.Provider>
    );
};
