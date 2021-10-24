import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { useForm } from "react-hook-form";

/**
 *  Sign In screen.
 *  @access Only unauthenticated users
 *  @author Harrsh Patel <dev@harrsh.com>
 */
const SignIn = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const [authenticationDetails, setAuthenticationDetails] = useState({
        username: "",
        password: "",
    });

    const onSubmit = (data) => console.log(data);

    const handleDataChange = (e) => {
        console.log(e.target, " <<< ");
        setAuthenticationDetails((authenticationDetailsCopy) => {
            return {
                ...authenticationDetailsCopy,
                [e.target.name]: e.target.value,
            };
        });
    };

    // console.log(watch("username")); // watch input value by passing the name of it

    return (
        <div className="signin_page__container">
            <div className="signin__container flex align-center justify-center flex-col">
                <div className="page_header">
                    Sign in to your MyLinks account
                </div>

                <div className="signin_input__container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="username_input flex flex-col">
                            <label htmlFor="username">Username/Email</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={authenticationDetails.username}
                                onChange={handleDataChange}
                            />
                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}
                        </div>

                        <div className="password_input flex flex-col">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={authenticationDetails.password}
                                onChange={handleDataChange}
                            />
                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}
                        </div>

                        <div className="signin_button__container flex justify-center">
                            <button
                                className="button button-contained"
                                type="submit"
                            >
                                Sign In
                            </button>
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
