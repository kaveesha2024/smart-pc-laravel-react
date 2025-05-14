import React, { ChangeEvent, useState } from "react";
import UpdateUserInputField from "./re-usable/UpdateUserInputField.tsx";
import { NavigateFunction, useLocation, useNavigate } from "react-router";
import { IUserUpdateInputFieldDetails, updateErrState } from "../../../utility/types/updateUser/updateUser";
import { IAllUsers } from "../../../utility/types/adminPanel/AdminPanel";
import axios from "axios";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { RootState } from "../../../store.ts";


const UpdateUserForm: React.FC = () => {
    const userPrevDetails: IAllUsers = useLocation().state;
    const navigate: NavigateFunction  = useNavigate();
    const token: string = useSelector((state: RootState) => state.authentication.token);
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
    console.log(errState);
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
        try {
            setIsLoading(true);
            const response = await axios.put(
                "/api/users/user-update",
                userUpdateInputFieldDetails,
                {
                    headers: { Authorization: "Bearer " + token },
                    params: { id: userPrevDetails.id },
                },
            );
            setIsLoading(false);
            if (response.data.status === 422) {
                if (response.data.errors.first_name) {
                    setErrState({
                        ...errState,
                        first_name: response.data.errors.first_name[0],
                    });
                    return;
                }
                if (response.data.errors.last_name) {
                    setErrState({
                        ...errState,
                        last_name: response.data.errors.last_name[0],
                    });
                    return;
                }
                if (response.data.errors.email) {
                    setErrState({
                        ...errState,
                        email: response.data.errors.email[0],
                    });
                    return;
                }
            }
            if (response.data.status === 401) {
                toast.error(response.data.message);
                return;
            }
            toast.success(response.data.message);
            navigate("/admin/panel/users");
        } catch (error) {
            console.log(error);
        }
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
                        <UpdateUserInputField
                            name={"first_name"}
                            type={"text"}
                            label={"First Name"}
                            inputHandler={inputHandler}
                            errState={errState.first_name}
                            userUpdateInputFieldDetails={
                                userUpdateInputFieldDetails.first_name
                            }
                        />
                        <UpdateUserInputField
                            name={"last_name"}
                            type={"text"}
                            label={"Last Name"}
                            inputHandler={inputHandler}
                            errState={errState.last_name}
                            userUpdateInputFieldDetails={
                                userUpdateInputFieldDetails.last_name
                            }
                        />
                        <UpdateUserInputField
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
