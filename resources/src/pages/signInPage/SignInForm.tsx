import { useSelector } from "react-redux";
import { ISignInForm } from "../../utility/types/userFormtypes/UserForms.ts";
import { RootState } from "../../store.ts";
import React from "react";
import { Link, useNavigate } from "react-router";

const SignInForm: React.FC<ISignInForm> = ({
                                               handleInput,
                                               handleSubmit,
                                               inputData,
                                           }) => {
    const navigate = useNavigate();
    const errorStatus = useSelector(
        (state: RootState) => state.authentication.errorStatus,
    );
    const isAuth = useSelector(
        (state: RootState) => state.authentication.isAuthenticated,
    );

    if (isAuth) {
        navigate('/');
    }

    return (
        <div className='w-full h-screen flex flex-col lg:flex-row bg-[url("/login.jpg")] bg-center bg-cover bg-no-repeat'>
            <div className="hidden lg:block w-1/2 h-full"></div>
            <div className="w-full  lg:w-1/2 h-full flex justify-center items-center px-4 sm:px-8">
                <div className="w-full max-w-[500px] h-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10">
                    <div className="flex flex-col text-[#fefbbe]">
                        <h1 className="font-bold text-3xl sm:text-4xl mb-2">
                            Welcome Back
                        </h1>
                        <span className="opacity-70 mb-6">
                            Please Enter Your Details
                        </span>
                    </div>

                    <div className="flex flex-col gap-2 text-[#fefbbe] font-semibold">
                        <label htmlFor="email">Email Address</label>
                        {errorStatus.email && (
                            <span className="text-red-500 text-sm transition">
                                {errorStatus.email}
                            </span>
                        )}
                        <input
                            className="p-2 border border-white/30 bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#fefbbe]"
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleInput}
                            value={inputData.email}
                        />
                    </div>

                    <div className="flex flex-col gap-2 mt-4 text-[#fefbbe] font-semibold">
                        <label htmlFor="password">Password</label>
                        {errorStatus.password && (
                            <span className="text-red-500 text-sm transition">
                                {errorStatus.password}
                            </span>
                        )}
                        <input
                            className="p-2 border border-white/30 bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#fefbbe]"
                            type="password"
                            name="password"
                            id="password"
                            onChange={handleInput}
                            value={inputData.password}
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="mt-8 w-full h-[50px] rounded-md bg-[#fefbbe] hover:bg-[#f461ad] text-black text-lg font-semibold transition"
                    >
                        Login
                    </button>

                    <div className="mt-5 text-[#fefbbe] flex justify-center items-center gap-2 text-sm">
                        <span>Don't have an account?</span>
                        <Link
                            to="/user/signup"
                            className="hover:underline hover:text-[#f461ad] transition"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
