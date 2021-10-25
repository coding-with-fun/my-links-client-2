import { get } from "lodash";
import React, { useContext } from "react";
import DefaultProfilePhoto from "../../../assets/default_profile_photo.png";
import { UserDataContext } from "../../../contexts/UserDataContext";
import UserLinks from "./UserLinks";

/**
 *  Screen to display user details to the web.
 *  @author Harrsh Patel <dev@harrsh.com>
 */
const UserDetails = () => {
    const { userInfo } = useContext(UserDataContext);

    return (
        <div className="user_details__container container flex flex-col align-center">
            <div className="user_photo__container">
                <img
                    src={get(userInfo, "displayPhoto", DefaultProfilePhoto)}
                    alt=""
                />
            </div>

            <div className="user_name">@{get(userInfo, "username", "-")}</div>

            <UserLinks />
        </div>
    );
};

export default UserDetails;
