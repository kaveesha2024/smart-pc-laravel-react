import React, { ChangeEvent, FormEvent, useState } from "react";
import SignInForm from "./SignInForm.tsx";
import userSignInApi from "../../../utility/api/UserSignIn.ts";
import { useDispatch } from "react-redux";
import { ISignIn } from "../../../utility/types/userFormtypes/UserForms.ts";
import { dispatch } from "../../../store.ts";


const SignIn:React.FC = () => {
    const dispatch: dispatch = useDispatch();
    const [inputData, setInputData] = useState<ISignIn>({
        'email' : "",
        "password" : "",
    });
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputData({
            ...inputData,
            [name]: value,
        });
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(userSignInApi(inputData));
    };
    return (
        <div>
            <SignInForm
                handleInput={handleInput}
                handleSubmit={handleSubmit}
                inputData={inputData}
            />
        </div>
    );
};

export default SignIn;
