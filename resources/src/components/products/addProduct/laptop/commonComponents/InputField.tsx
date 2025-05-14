import React from "react";
import { IInputField } from "../../../../../utility/types/addProduct/AddProduct.d.ts";

const InputField: React.FC <IInputField> = ({ handleInputDetails, value, name, type, errState, label }) => {
    return (
        <div className='flex flex-row gap-10 bg-[#2a2a2a] shadow-lg justify-between w-full items-center rounded-lg p-3 hover:bg-[#333333] transition-all duration-300'>
            <label htmlFor={name} className="text-gray-200 font-medium min-w-[150px]">{label}</label>
            <p className='text-red-500 font-semibold'>
                {errState}
            </p>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={handleInputDetails}
                className="flex-1 p-2 outline-none bg-[#1a1a1a] rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-gray-500 transition-all duration-300"
            />
        </div>
    );
};

export default InputField;
