import React, { ChangeEvent, useState } from "react";
import FormInputField from "./re-usable/FormInputField.tsx";
import { NavigateFunction, useLocation, useNavigate } from "react-router";
import {
    IUserUpdateInputFieldDetails,
    updateErrState,
} from "../../../utility/types/updateUser/updateUser";
import { IAllUsers } from "../../../utility/types/adminPanel/AdminPanel";
import { useSelector } from "react-redux";
import { RootState } from "../../../store.ts";
import handleUserUpdate from "../../../utility/api/updateUser/updateUser.ts";

const UpdateUserForm: React.FC = () => {
    const userPrevDetails: IAllUsers = useLocation().state;
    const navigate: NavigateFunction = useNavigate();
    const token: string = useSelector(
        (state: RootState) => state.authentication.token,
    );
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [userUpdateInputFieldDetails, setUserUpdateInputFieldDetails] =
        useState<IUserUpdateInputFieldDetails>({
            first_name: userPrevDetails.first_name,
            last_name: userPrevDetails.last_name,
            email: userPrevDetails.email,
            role: userPrevDetails.role,
        });
    const [errState, setErrState] = useState<updateErrState>({
        first_name: "",
        last_name: "",
        email: "",
    });
    const inputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setErrState({
            first_name: "",
            last_name: "",
            email: "",
        });
        const { name, value } = event.target;
        setUserUpdateInputFieldDetails({
            ...userUpdateInputFieldDetails,
            [name]: value,
        });
    };
    const handleSubmit = async () => {
        await handleUserUpdate(
            setIsLoading,
            userUpdateInputFieldDetails,
            token,
            userPrevDetails,
            setErrState,
            errState,
            navigate,
        );
    };
    return (
        <div className="p-20 w-full h-full ">
            <div className="backdrop-blur-2xl w-full h-full">
                {isLoading ? (
                    <div className="w-full  h-full flex justify-center items-center ">
                        <div className="border-2 animate-spin border-transparent border-l-red-900 w-[40px] rounded-full  h-[40px]"></div>
                    </div>
                ) : (
                    <form className="max-w-sm mx-auto">
                        <FormInputField
                            name={"first_name"}
                            type={"text"}
                            label={"First Name"}
                            inputHandler={inputHandler}
                            errState={errState.first_name}
                            userUpdateInputFieldDetails={
                                userUpdateInputFieldDetails.first_name
                            }
                        />
                        <FormInputField
                            name={"last_name"}
                            type={"text"}
                            label={"Last Name"}
                            inputHandler={inputHandler}
                            errState={errState.last_name}
                            userUpdateInputFieldDetails={
                                userUpdateInputFieldDetails.last_name
                            }
                        />
                        <FormInputField
                            name={"email"}
                            type={"email"}
                            label={"Email Address"}
                            inputHandler={inputHandler}
                            errState={errState.email}
                            userUpdateInputFieldDetails={
                                userUpdateInputFieldDetails.email
                            }
                        />
                        <div className="mb-5">
                            <select
                                id="role"
                                onChange={(
                                    event: ChangeEvent<HTMLSelectElement>,
                                ) => {
                                    const { name, value } = event.target;
                                    setUserUpdateInputFieldDetails({
                                        ...userUpdateInputFieldDetails,
                                        [name]: value,
                                    });
                                }}
                                name="role"
                                defaultValue={userUpdateInputFieldDetails.role}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Update
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default UpdateUserForm;
