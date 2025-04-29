import React, { useState } from "react";
import SignInForm from "./SignInForm.tsx";

interface ISignIn {
    email: string;
    password: string;
}
const SignIn:React.FC = () => {
    const [inputData, setInputData] = useState<ISignIn>({
        'email' : "",
        "password" : "",
    });
    const [errorStatus, setErrorStatus] = useState<ISignIn>({
        'email' : "",
        "password" : "",
    });
    const handleInput = event => {
        const { name, value } = event.target;
        setInputData({
            ...inputData,
            [name]: value,
        });
        setErrorStatus({
            ...errorStatus,
            [name]: "",
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputData.email) {
            setErrorStatus({
                ...errorStatus,
                email: "Email is required",
            });
            return;
        }
        if (!inputData.password) {
            setErrorStatus({
                ...errorStatus,
                password: "Password is required",
            });
            return;
        }
    };
    return (
        <div>
            <SignInForm
                handleInput={handleInput}
                handleSubmit={handleSubmit}
                errorStatus={errorStatus}
            />
        </div>
    );
};

export default SignIn;
