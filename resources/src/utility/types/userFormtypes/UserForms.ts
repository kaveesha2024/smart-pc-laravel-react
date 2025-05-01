import { ChangeEvent, FormEvent } from "react";

export interface IInputData {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirmPassword: string;
}
export interface IInputField {
    inputName: string;
    label: string;
    type: string;
    inputData: string;
    placeholder: string;
    errorMessage: string;
    onchange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export interface ISignUpForm {
    err: IInputData;
    handleInputData: (event: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    inputData: IInputData;
}
export interface ISignIn {
    email: string;
    password: string;
}
export interface ISignInForm {
    handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: () => void;
    inputData: ISignIn;
}
