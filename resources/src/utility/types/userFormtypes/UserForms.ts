import { ChangeEvent, FormEvent } from "react";

export interface IInputData {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
}
export interface IInputField {
    inputName: string,
    label: string,
    type: string,
    placeholder: string,
    errorMessage: string,
    onchange: (event: ChangeEvent<HTMLInputElement>) => void,
}
export interface ISignUpForm {
    err: IInputData,
    handleInputData: (event: ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void,
}
