import { ISignUpForm } from "../../utility/types/userFormtypes/UserForms.ts";
import React from "react";
import { Link } from "react-router";

const SignUpForm: React.FC<ISignUpForm> = ({
    err,
    handleInputData,
    handleSubmit,
    inputData,
}) => {
    return (
        <div className='w-full min-h-screen bg-[url("/signup.jpg")] bg-center bg-cover'>
            <div className="w-full min-h-screen backdrop-blur-2xl flex justify-center items-center px-4 py-8">
                <div className="w-full max-w-5xl h-full flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden">
                    <div className="w-full md:w-1/2 bg-[#00000052]   md:opacity-80 flex justify-center items-center p-6">
                        <div className="w-full max-w-md flex flex-col">
                            <div className="text-white mb-6">
                                <h1 className="font-bold text-2xl sm:text-3xl">
                                    Welcome to Smart PC
                                </h1>
                                <p className="opacity-70">
                                    Please enter your details
                                </p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { label: "First Name", name: "first_name" },
                                    { label: "Last Name", name: "last_name" },
                                    {
                                        label: "Email",
                                        name: "email",
                                        type: "email",
                                    },
                                    {
                                        label: "Password",
                                        name: "password",
                                        type: "password",
                                    },
                                    {
                                        label: "Confirm Password",
                                        name: "confirmPassword",
                                        type: "password",
                                    },
                                ].map(({ label, name, type = "text" }) => (
                                    <div key={name}>
                                        <label
                                            className="text-white font-semibold"
                                            htmlFor={name}
                                        >
                                            {label}
                                        </label>
                                        <p className="text-red-500 text-sm">
                                            {err[name as keyof typeof err]}
                                        </p>
                                        <input
                                            id={name}
                                            name={name}
                                            type={type}
                                            value={
                                                inputData[
                                                    name as keyof typeof inputData
                                                ]
                                            }
                                            onChange={handleInputData}
                                            className="w-full p-2 border border-white/30 bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#fefbbe]"
                                        />
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="mt-6 w-full py-3 bg-white hover:bg-[#00d1f3] text-black font-semibold rounded-md transition"
                            >
                                Sign Up
                            </button>
                            <div className="mt-4 text-white text-sm text-center">
                                Already have an account?{" "}
                                <Link
                                    to="/user/signin"
                                    className="hover:underline text-[#00d1f3]"
                                >
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:block md:w-1/2 bg-[url("/signup.jpg")] bg-cover bg-center'></div>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
