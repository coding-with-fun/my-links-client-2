import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import Button from "../Button";

const commonLinks = [
    {
        _id: 0,
        title: "About",
        path: "/about",
    },
    {
        _id: 1,
        title: "Pricing",
        path: "/pricing",
    },
];

const privateLinks = [
    {
        _id: 0,
        title: "Profile",
        path: "/:username/settings",
    },
];

const LinkContainer = ({ link }) => {
    return (
        <div className="link__container">
            <Link to={link.path}>{link.title}</Link>
        </div>
    );
};

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { isUserAuthenticated } = useContext(AuthenticationContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <div className="navbar__container flex align-center py-3 px-4">
                <div className="navbar__logo flex-1">My Links</div>

                <span className="navbar__burger" onClick={toggleSidebar}>
                    <i className="fas fa-bars"></i>
                </span>

                <div
                    className={`${
                        isSidebarOpen ? "sidebar_open" : "sidebar_close"
                    } navbar__links_container`}
                >
                    <div className="navbar__header flex align-center">
                        <div className="navbar__logo flex-1">My Links</div>

                        <span onClick={toggleSidebar}>
                            <i class="fas fa-times"></i>
                        </span>
                    </div>

                    <div className="navbar__links">
                        {commonLinks.map((link) => {
                            return <LinkContainer link={link} key={link._id} />;
                        })}

                        {isUserAuthenticated ? (
                            <Fragment>
                                {privateLinks.map((link) => {
                                    return (
                                        <LinkContainer
                                            link={link}
                                            key={link._id}
                                        />
                                    );
                                })}

                                <Button type="outlined" className="navbar-btn">
                                    <Link to="/">Sign Out</Link>
                                </Button>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Button type="outlined" className="navbar-btn">
                                    <Link to="/signin">Sign In</Link>
                                </Button>
                            </Fragment>
                        )}
                    </div>
                </div>

                <div onClick={toggleTheme} className="theme_toggler">
                    {theme === "light" ? (
                        <span>
                            <i class="fas fa-moon"></i>
                        </span>
                    ) : (
                        <span>
                            <i class="fas fa-sun"></i>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
