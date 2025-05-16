import React, { ChangeEvent } from "react";
import UpdateUserInputField from "../../user/updateUser/re-usable/UpdateUserInputField.tsx";
import { IAddProductDetails, IAddProductErrState } from "../../../utility/types/product/addProduct/AddProduct";

interface IAddProductFormProp {
    handleInputDetails: (event: ChangeEvent<HTMLInputElement>) => void;
    errState: IAddProductErrState;
    handleSubmit: () => void;
    setInputDetails: (inputDetails: IAddProductDetails) => void;
    inputDetails: IAddProductDetails;
}
const AddProductForm: React.FC<IAddProductFormProp> = ({
    handleInputDetails,
    errState,
    handleSubmit,
    setInputDetails,
    inputDetails,
}) => {
    return (
        <form className="max-w-sm mx-auto ">
            <h1 className="font-mono font-bold text-2xl mb-5">
                Add New Product
            </h1>
            <UpdateUserInputField
                name={"productName"}
                type={"text"}
                label={"Product Name"}
                errState={errState.productName}
                inputHandler={handleInputDetails}
                userUpdateInputFieldDetails=""
            />
            <UpdateUserInputField
                name={"description"}
                type={"text"}
                label={"Description"}
                errState={errState.description}
                inputHandler={handleInputDetails}
                placeholder="Ex - Ram: 8GB, Storage: 512GB,"
                userUpdateInputFieldDetails=""
            />
            <UpdateUserInputField
                name={"price"}
                type={"number"}
                label={"Price Rs."}
                errState={errState.price}
                inputHandler={handleInputDetails}
                userUpdateInputFieldDetails=""
            />
            <UpdateUserInputField
                name={"labelledPrice"}
                type={"number"}
                label={"Labelled Price Rs."}
                errState={errState.labelledPrice}
                inputHandler={handleInputDetails}
                userUpdateInputFieldDetails=""
            />
            <UpdateUserInputField
                name={"quantity"}
                type={"number"}
                label={"Quantity"}
                errState={errState.quantity}
                inputHandler={handleInputDetails}
                userUpdateInputFieldDetails=""
            />
            <UpdateUserInputField
                name={"cardDescription"}
                type={"text"}
                label={"Card Description"}
                placeholder="Type here what you want to display in the card"
                errState={errState.cardDescription}
                inputHandler={handleInputDetails}
                userUpdateInputFieldDetails=""
            />
            <div className="mb-5">
                <label
                    htmlFor="images"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Images
                </label>
                <p className="text-red-500 text-sm">{errState.images}</p>
                <input
                    multiple
                    type="file"
                    id="images"
                    name="images"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setInputDetails({
                            ...inputDetails,
                            images: event.target.files ? Array.from(event.target.files) : [],
                        });
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <button
                type="button"
                onClick={handleSubmit}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    );
};

export default AddProductForm;
