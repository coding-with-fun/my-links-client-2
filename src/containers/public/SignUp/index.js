import { get } from "lodash";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AuthenticationContext } from "../../../contexts/AuthenticationContext";

/**
 *  Sign Up screen.
 *  @access Only unauthenticated users
 *  @author Harrsh Patel <dev@harrsh.com>
 */
const SignUp = () => {
    const { authenticateUser } = useContext(AuthenticationContext);
    const history = useHistory();
    const location = useLocation();

    const pathName = get(location, "state.from", {
        pathname: "/",
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        authenticateUser(() => {
            history.push(pathName);
        });
    };

    return (
        <div className="authentication_page__container">
            <div className="authentication__container flex align-center justify-center flex-col">
                <div className="page_header">
                    <div>Create an account for free</div>

                    <div className="page_sub_header">
                        Free forever. No payment needed.
                    </div>
                </div>

                <div className="authentication_input__container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="field_input__container flex flex-col">
                            <div className="user_input flex flex-col">
                                <label htmlFor="username">Username</label>

                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    {...register("username", {
                                        required: "Enter your username",
                                        minLength: {
                                            value: 7,
                                            message:
                                                "Username should be at least 7 characters long.",
                                        },
                                    })}
                                />
                            </div>

                            <p className="error">
                                {get(errors, "username.message")}
                            </p>
                        </div>

                        <div className="field_input__container flex flex-col">
                            <div className="user_input flex flex-col">
                                <label htmlFor="email">Email</label>

                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    {...register("email", {
                                        required: "Enter your email",
                                    })}
                                />
                            </div>

                            <p className="error">
                                {get(errors, "email.message")}
                            </p>
                        </div>

                        <div className="field_input__container flex flex-col">
                            <div className="user_input flex flex-col">
                                <label htmlFor="password">Password</label>

                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    {...register("password", {
                                        required: "Enter your password",
                                        minLength: {
                                            value: 7,
                                            message:
                                                "Password should be at least 7 characters long.",
                                        },
                                    })}
                                />
                            </div>

                            <p className="error">
                                {get(errors, "password.message")}
                            </p>
                        </div>

                        <div className="field_input__container flex flex-col">
                            <div className="user_input flex flex-col">
                                <label htmlFor="confirmPassword">
                                    Confirm Password
                                </label>

                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    {...register("confirmPassword", {
                                        required: "Enter confirmation password",
                                        minLength: {
                                            value: 7,
                                            message:
                                                "Password should be at least 7 characters long.",
                                        },
                                    })}
                                />
                            </div>

                            <p className="error">
                                {get(errors, "confirmPassword.message")}
                            </p>
                        </div>

                        <div className="submit_button__container flex justify-center">
                            <button
                                className="button button-contained"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>

                <div className="switch_link__container">
                    Already have an account? <Link to="/signin">Sign In</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
