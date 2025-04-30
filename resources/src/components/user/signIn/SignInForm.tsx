import InputField from "../commonComponents/InputField.tsx";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { ISignInForm } from "../../../utility/types/userFormtypes/UserForms.ts";
import { RootState } from "../../../store.ts";
import React from "react";

const SignInForm: React.FC<ISignInForm> = ({
    handleInput,
    handleSubmit,
    inputData,
}) => {
    const errorStatus = useSelector(
        (state: RootState) => state.authentication.errorStatus,
    );
    return (
        <div className=" h-screen w-full flex justify-center items-center">
            <div
                className=" w-[40%] max-sm:w-[95%] sm:w-[95%] p-10 "
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
                        inputData={inputData.email}
                    />
                    <InputField
                        inputName="password"
                        type="password"
                        label="Enter Your Password"
                        placeholder="Password"
                        errorMessage={errorStatus.password}
                        onchange={handleInput}
                        inputData={inputData.password}
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
