import React, { ChangeEvent } from "react";

interface IUpdateUserInputFieldProp {
    name: string,
    type: string,
    label: string,
    inputHandler: (event: ChangeEvent<HTMLInputElement>) => void,
    userUpdateInputFieldDetails: string,
    errState: string,
}
const UpdateUserInputField: React.FC <IUpdateUserInputFieldProp> = ({ name, type, label, inputHandler, userUpdateInputFieldDetails, errState }) => {
    return (
        <div className="mb-5">
            <label
                htmlFor={name}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <p className="text-red-500 text-sm">{errState}</p>
            <input
                type={type}
                id={name}
                onChange={inputHandler}
                name={name}
                defaultValue={userUpdateInputFieldDetails}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
    );
};

export default UpdateUserInputField;
