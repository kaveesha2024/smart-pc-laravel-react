import { IInputField } from "../../../utility/types/userFormtypes/UserForms.ts";


const InputField:React.FC <IInputField> = ({ inputName, label, type, placeholder, errorMessage, onchange }) => {
    return (
        <div className="mb-4 flex flex-col gap-2 " >
            <label className='font-semibold' htmlFor={inputName}>{label}</label>
            <input
                style={{
                borderBottom: '1px solid #000',
                padding: '5px',
                outline: 'none',
            }}
                type={type} id={inputName} name={inputName} placeholder={placeholder}
                onChange={onchange}
            />
            <span className='text-red-500 text-[13px]'>{errorMessage}</span>
        </div>
    );
};

export default InputField;
