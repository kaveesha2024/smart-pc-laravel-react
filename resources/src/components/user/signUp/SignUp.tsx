import React, { ChangeEvent, FormEvent, useState } from "react";
import SignUpForm from "./SignUpForm.tsx";
import { IInputData } from "../../../utility/types/userFormtypes/UserForms.ts";


const SignUp:React.FC = () => {
    const [inputData, setInputData] = useState<IInputData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    console.log(inputData);
    const [err, setErr] = useState<IInputData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    console.log(err);
    const handleInputData = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setInputData({
            ...inputData,
            [name]: value,
        });
        setErr({
            ...err,
            [name]: '',
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!inputData.firstName) {
            setErr({
                ...err,
                firstName: 'First Name is required',
            });
            return;
        }
        if (!inputData.lastName) {
            setErr({
                ...err,
                lastName: 'Last Name is required',
            })
            return;
        }
        if (!inputData.email){
            setErr({
                ...err,
                email: 'Email is required',
            });
            return;
        }
        if (!inputData.password){
            setErr({
                ...err,
                password: 'Password is required',
            });
            return;
        }
        if (inputData.password != inputData.confirmPassword) {
            setErr({
                ...err,
                confirmPassword: 'Passwords do not match',
            });
            return;
        }
        console.log(inputData);
    };

    return (
        <div>
            <SignUpForm err={err} handleInputData={handleInputData} handleSubmit={handleSubmit} />
        </div>
    );
};

export default SignUp;
