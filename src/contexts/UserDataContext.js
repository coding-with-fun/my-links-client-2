import React, { createContext, useEffect, useState } from "react";
import UserDetails from "../data/UserDetails.json";
import UserLinks from "../data/UserLinks.json";

/**
 *  Context to handle user data.
 *  @author Harrsh Patel <dev@harrsh.com>
 */
export const UserDataContext = createContext();

/**
 *  Provider to handle user data.
 *  @author Harrsh Patel <dev@harrsh.com>
 */
export const UserDataProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState();
    const [userLinks, setUserLinks] = useState([]);

    useEffect(() => {
        handleSetUserInfo();
        handleSetUserLinks();
    }, []);

    const handleSetUserInfo = () => {
        setUserInfo(UserDetails);
    };

    const handleSetUserLinks = () => {
        setUserLinks(UserLinks);
    };

    return (
        <UserDataContext.Provider
            value={{
                userInfo,
                userLinks,
            }}
        >
            {children}
        </UserDataContext.Provider>
    );
};
