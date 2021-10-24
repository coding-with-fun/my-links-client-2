import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

/**
 *  Sign In screen.
 *  @access Only unauthenticated users
 *  @author Harrsh Patel <dev@harrsh.com>
 */
const SignIn = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);

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
                                {...register("username", { required: true })}
                            />
                        </div>

                        <div className="password_input flex flex-col">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                {...register("password", { required: true })}
                            />
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
