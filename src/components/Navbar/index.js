import React, { Fragment, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
        title: "Account",
        path: "/settings",
    },
];

const LinkContainer = ({ link, ...rest }) => {
    return (
        <Link to={link.path}>
            <div className="link__container" {...rest}>
                {link.title}
            </div>
        </Link>
    );
};

const Navbar = () => {
    const history = useHistory();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { isUserAuthenticated, handleSignOut } = useContext(
        AuthenticationContext
    );
    const { theme, toggleTheme } = useContext(ThemeContext);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSignOutUser = () => {
        handleSignOut(() => {
            history.push("/");
        });

        toggleSidebar();
    };

    return (
        <div className="navbar__container flex align-center py-3 px-4">
            <div className="navbar__logo flex-1">
                <Link to="/">My Links</Link>
            </div>

            <span className="navbar__burger" onClick={toggleSidebar}>
                <i className="fas fa-bars"></i>
            </span>

            <div
                className={`${
                    isSidebarOpen ? "sidebar_open" : "sidebar_close"
                } navbar__links_container`}
            >
                <div className="navbar__header flex align-center">
                    <div className="navbar__logo flex-1">
                        <Link to="/" onClick={toggleSidebar}>
                            My Links
                        </Link>
                    </div>

                    <span onClick={toggleSidebar}>
                        <i className="fas fa-times"></i>
                    </span>
                </div>

                <div className="navbar__links">
                    {commonLinks.map((link) => {
                        return (
                            <LinkContainer
                                link={link}
                                key={link._id}
                                onClick={toggleSidebar}
                            />
                        );
                    })}

                    {isUserAuthenticated ? (
                        <Fragment>
                            {privateLinks.map((link) => {
                                return (
                                    <LinkContainer
                                        link={link}
                                        key={link._id}
                                        onClick={toggleSidebar}
                                    />
                                );
                            })}

                            <Link to="/">
                                <Button
                                    type="outlined"
                                    className="navbar-btn"
                                    onClick={handleSignOutUser}
                                >
                                    Sign Out
                                </Button>
                            </Link>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Link to="/signin">
                                <Button
                                    type="outlined"
                                    className="navbar-btn"
                                    onClick={toggleSidebar}
                                >
                                    Sign In
                                </Button>
                            </Link>
                        </Fragment>
                    )}
                </div>
            </div>

            <div onClick={toggleTheme} className="theme_toggler">
                {theme === "light" ? (
                    <span>
                        <i className="fas fa-moon"></i>
                    </span>
                ) : (
                    <span>
                        <i className="fas fa-sun"></i>
                    </span>
                )}
            </div>
        </div>
    );
};

export default Navbar;
