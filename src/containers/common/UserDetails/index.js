import React from "react";
import UserLinks from "./UserLinks";

/**
 *  Screen to display user details to the web.
 *  @author Harrsh Patel <dev@harrsh.com>
 */
const UserDetails = () => {
    return (
        <div className="container">
            <h1>User Details</h1>

            <UserLinks />
        </div>
    );
};

export default UserDetails;
