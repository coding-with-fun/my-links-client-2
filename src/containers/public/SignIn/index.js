import React from "react";
import { Link } from "react-router-dom";

/**
 *  Sign In screen.
 *  @access Only unauthenticated users
 *  @author Harrsh Patel <dev@harrsh.com>
 */
const SignIn = () => {
    return (
        <div className="signin_page__container container">
            <div className="signin__container">
                <div className="page_header">
                    Sign in to your MyLinks account
                </div>

                <div className="signin_input__container">
                    <form action="">
                        <div className="username_input">
                            <label htmlFor="username">Username/Email</label>
                            <input type="text" name="username" id="username" />
                        </div>

                        <div className="password_input">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                            />
                        </div>

                        <div className="signin_button__container">
                            <div className="signin_button">Sign In</div>
                        </div>

                        <div className="forgot_password">Forgot password?</div>
                    </form>
                </div>

                <div className="signup__container">
                    Don't have an account? <Link to="/signup">Create One</Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
