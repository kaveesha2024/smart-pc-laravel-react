import React, { ChangeEvent, useState } from "react";
import UpdateUserInputField from "./re-usable/UpdateUserInputField.tsx";
import { useLocation } from "react-router";
import { IAllUsers } from "../../../utility/types/adminPanel/AdminPanel.ts";
import { IUserUpdateInputFieldDetails } from "../../../utility/types/updateUser/updateUser";


const UpdateUserForm: React.FC = () => {
    const userPrevDetails: IAllUsers = useLocation().state;
    const [userUpdateInputFieldDetails, setUserUpdateInputFieldDetails] =
        useState<IUserUpdateInputFieldDetails>({
            firstName: userPrevDetails.first_name,
            lastName: userPrevDetails.last_name,
            email: userPrevDetails.email,
            role: userPrevDetails.role,
        });
    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserUpdateInputFieldDetails({
            ...userUpdateInputFieldDetails,
            [name]: value,
        });
    };
    return (
        <div className="p-20 w-full h-full ">
            <div className="backdrop-blur-2xl w-full h-full">
                <form className="max-w-sm mx-auto">
                    <UpdateUserInputField
                        name={"firstName"}
                        type={"text"}
                        label={"First Name"}
                        inputHandler={inputHandler}
                        userUpdateInputFieldDetails={
                            userUpdateInputFieldDetails.firstName
                        }
                    />
                    <UpdateUserInputField
                        name={"lastName"}
                        type={"text"}
                        label={"Last Name"}
                        inputHandler={inputHandler}
                        userUpdateInputFieldDetails={
                            userUpdateInputFieldDetails.lastName
                        }
                    />
                    <UpdateUserInputField
                        name={"email"}
                        type={"email"}
                        label={"Email Address"}
                        inputHandler={inputHandler}
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
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateUserForm;
