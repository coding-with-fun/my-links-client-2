import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";

/**
 *  Sign In screen.
 *  @access Only unauthenticated users
 *  @author Harrsh Patel <dev@harrsh.com>
 */
const SignIn = () => {
    return (
        <div className="signin_page__container">
            <div className="signin__container flex align-center justify-center flex-col">
                <div className="page_header">
                    Sign in to your MyLinks account
                </div>

                <div className="signin_input__container">
                    <form action="">
                        <div className="username_input flex flex-col">
                            <label htmlFor="username">Username/Email</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                autoComplete="off"
                            />
                        </div>

                        <div className="password_input flex flex-col">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="off"
                            />
                        </div>

                        <div className="signin_button__container flex justify-center">
                            <Button type="contained">Sign In</Button>
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
