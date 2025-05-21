import FormInputField from "../../user/updateUser/re-usable/FormInputField.tsx";
import React, { ChangeEvent, useState } from "react";
import { IAllProducts } from "../../../utility/types/product/getProducts/GetProducts";

interface UpdateProductFormProp {
    handleInputField: (event: ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (file: FileList | null) => void,
    product: IAllProducts
}
const UpdateProductForm: React.FC <UpdateProductFormProp> = ({ handleInputField, handleSubmit, product }) => {
    const [file, setFile] = useState<FileList | null>(null);
    return (
        <form className="max-w-sm mx-auto ">
            <h1 className="font-mono font-bold text-2xl mb-5">
                Update Product
            </h1>
            <FormInputField
                name={"product_name"}
                type={"text"}
                label={"Product Name"}
                errState=''
                inputHandler={handleInputField}
                userUpdateInputFieldDetails={product.product_name}
            />
            <FormInputField
                name={"description"}
                type={"text"}
                label={"Description"}
                errState=""
                inputHandler={handleInputField}
                placeholder="Ex - Ram: 8GB, Storage: 512GB,"
                userUpdateInputFieldDetails={product.description}
            />
            <FormInputField
                name={"labelled_price"}
                type={"number"}
                label={"Labelled Price Rs."}
                errState=""
                inputHandler={handleInputField}
                userUpdateInputFieldDetails={product.labelled_price}
            />
            <FormInputField
                name={"price"}
                type={"number"}
                label={"Price Rs."}
                errState=""
                inputHandler={handleInputField}
                userUpdateInputFieldDetails={product.price}
            />
            <FormInputField
                name={"quantity"}
                type={"number"}
                label={"Quantity"}
                errState=""
                inputHandler={handleInputField}
                userUpdateInputFieldDetails={product.quantity}
            />
            <FormInputField
                name={"card_description"}
                type={"text"}
                label={"Card Description"}
                placeholder="Type here what you want to display in the card"
                errState=""
                inputHandler={handleInputField}
                userUpdateInputFieldDetails={product.card_description}
            />
            <div className="mb-5">
                <label
                    htmlFor="images"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Images
                </label>
                <p className="text-red-500 text-sm"></p>
                <input
                    multiple
                    type="file"
                    id="images"
                    name="images"
                    defaultValue=''
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setFile(event.target.files)
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <button
                type="button"
                onClick={()=>{handleSubmit(file)}}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    );
};

export default UpdateProductForm;
