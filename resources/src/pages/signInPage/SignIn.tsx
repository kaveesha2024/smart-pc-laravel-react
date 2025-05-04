import React, { ChangeEvent, useEffect, useState } from "react";
import SignInForm from "./SignInForm.tsx";
import userSignInApi from "../../utility/api/UserSignIn.ts";
import { useDispatch, useSelector } from "react-redux";
import { ISignIn } from "../../utility/types/userFormtypes/UserForms.ts";
import { dispatch, RootState } from "../../store.ts";
import { NavigateFunction, useNavigate } from "react-router";
import { isAdmin } from "../../components/commonValidationConditions/CommonValidationConditions.ts";

const SignIn: React.FC = () => {
    const dispatch: dispatch = useDispatch();
    const navigate: NavigateFunction = useNavigate();
    const { isAuthenticated, role } = useSelector((state: RootState) => state.authentication);
    useEffect(() => {
        if (isAuthenticated) {
            if (isAdmin(role)){
                navigate('/admin/panel');
                return;
            }
            navigate('/')
        }
    }, [isAuthenticated]);
    const [inputData, setInputData] = useState<ISignIn>({
        email: "",
        password: "",
    });
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputData({
            ...inputData,
            [name]: value,
        });
    };
    const handleSubmit = () => {
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
