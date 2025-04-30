import InputField from "../commonComponents/InputField.tsx";
import { Button } from "@mui/material";
import { ISignUpForm } from "../../../utility/types/userFormtypes/UserForms.ts";
import React from "react";

const SignUpForm: React.FC<ISignUpForm> = ({
    err,
    handleInputData,
    handleSubmit,
    inputData,
}) => {
    return (
        <div className=" h-screen w-full flex justify-center items-center">
            <div
                className=" w-[40%] p-10 max-sm:w-[95%] "
                style={{
                    borderRadius: "10px",
                    boxShadow: "0 0 7px #000",
                }}
            >
                <h1 className="text-center text-2xl font-bold mb-5 text-blue-950">
                    Create Your Account
                </h1>
                <form action="" onSubmit={handleSubmit}>
                    <InputField
                        inputName="first_name"
                        type="text"
                        label="Enter Your First Name"
                        placeholder="First Name"
                        errorMessage={err.first_name}
                        onchange={handleInputData}
                        inputData={inputData.first_name}
                    />
                    <InputField
                        inputName="last_name"
                        type="text"
                        label="Enter Your Last Name"
                        placeholder="Last Name"
                        errorMessage={err.last_name}
                        onchange={handleInputData}
                        inputData={inputData.last_name}
                    />
                    <InputField
                        inputName="email"
                        type="text"
                        label="Enter Your Email"
                        placeholder="example@123.com"
                        errorMessage={err.email}
                        onchange={handleInputData}
                        inputData={inputData.email}
                    />
                    <InputField
                        inputName="password"
                        type="password"
                        label="Enter Your Password"
                        placeholder="password"
                        errorMessage={err.password}
                        onchange={handleInputData}
                        inputData={inputData.password}
                    />
                    <InputField
                        inputName="confirmPassword"
                        type="password"
                        label="Confirm Your Password"
                        placeholder="Re-type Password"
                        errorMessage={err.confirmPassword}
                        onchange={handleInputData}
                        inputData={inputData.confirmPassword}
                    />
                    <Button type="submit" className="bg-blue-500 w-full">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;
