import { createContext, useState } from "react";

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
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

    const authenticateUser = (cb) => {
        setIsUserAuthenticated(true);
        if (cb) cb();
    };

    const handleSignOut = (cb) => {
        setIsUserAuthenticated(false);
        if (cb) cb();
    };

    return (
        <AuthenticationContext.Provider
            value={{
                isUserAuthenticated,

                authenticateUser,
                handleSignOut,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};
