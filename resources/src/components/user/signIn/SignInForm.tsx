import React from "react";
import InputField from "../commonComponents/InputField.tsx";
import { Button } from "@mui/material";

const SignInForm:React.FC = ({ handleInput, handleSubmit, errorStatus }) => {
    return (
        <div className=" h-screen w-full flex justify-center items-center">
            <div
                className=" w-[40%] p-10 "
                style={{
                    borderRadius: "10px",
                    boxShadow: "0 0 7px #000",
                }}
            >
                <h1 className="text-center text-2xl font-bold mb-5 text-blue-950">
                    Login To Your Account
                </h1>
                <form onSubmit={handleSubmit}>
                    <InputField
                        inputName="email"
                        type="text"
                        label="Enter Your Email"
                        placeholder="Email"
                        errorMessage={errorStatus.email}
                        onchange={handleInput}
                    />
                    <InputField
                        inputName="password"
                        type="text"
                        label="Enter Your Password"
                        placeholder="Password"
                        errorMessage={errorStatus.password}
                        onchange={handleInput}
                    />
                    <Button type="submit" className="bg-blue-500 w-full">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SignInForm;
