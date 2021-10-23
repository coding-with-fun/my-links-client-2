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

    const handleSignIn = (cb) => {
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

                handleSignIn,
                handleSignOut,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};
