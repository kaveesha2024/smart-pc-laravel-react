import React, { ChangeEvent, useState } from "react";
import SignUpForm from "./SignUpForm.tsx";
import { IInputData } from "../../utility/types/userFormtypes/UserForms.d.ts";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const [inputData, setInputData] = useState<IInputData>({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [err, setErr] = useState<IInputData>({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const handleInputData = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputData({
            ...inputData,
            [name]: value,
        });
        setErr({
            ...err,
            [name]: "",
        });
    };

    const handleSubmit = async () => {
        if (!inputData.first_name) {
            setErr({
                ...err,
                first_name: "First Name is required",
            });
            return;
        }
        if (!inputData.last_name) {
            setErr({
                ...err,
                last_name: "Last Name is required",
            });
            return;
        }
        if (!inputData.email) {
            setErr({
                ...err,
                email: "Email is required",
            });
            return;
        }
        if (!inputData.password) {
            setErr({
                ...err,
                password: "Password is required",
            });
            return;
        }
        if (inputData.password != inputData.confirmPassword) {
            setErr({
                ...err,
                confirmPassword: "Passwords do not match",
            });
            return;
        }

        try {
            const signupToast = toast.loading('Loading...');
            const response = await axios.post(
                "/api/users/user-signup",
                inputData,
            );
            toast.dismiss(signupToast);
            if (response.data.status === 422) {
                const { errors } = response.data;
                Object.keys(errors).forEach((key) => {
                    setErr({
                        ...err,
                        [key]: errors[key][0],
                    });
                });
            } else {
                setInputData({
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
                toast.success('Signed up successfully');
                navigate('/user/signin');
            }
        } catch (error) {
            toast.error('Check your internet connection');
            console.log(error);
        }
    };
    return (
        <div>
            <SignUpForm
                err={err}
                handleInputData={handleInputData}
                handleSubmit={handleSubmit}
                inputData={inputData}
            />
        </div>
    );
};

export default SignUp;
