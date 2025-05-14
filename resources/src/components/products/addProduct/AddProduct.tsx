import React, { ChangeEvent, useState } from "react";
import AddProductForm from "./AddProductForm.tsx";

interface IAddProductDetails {
    productName: string,
    description: string,
    labelledPrice: number,
    price: number,
    quantity: number,
    cardDescription: string,
    images: string[],
}
export interface IAddProductErrState {
    productName: string,
    description: string,
    labelledPrice: string,
    price: string,
    quantity: string,
    cardDescription: string,
    images: string,
}
const AddProduct: React.FC = () => {
    const [inputDetails, setInputDetails] = useState<IAddProductDetails>({
        productName: "",
        description: "",
        labelledPrice: 0,
        price: 0,
        quantity: 0,
        cardDescription: "",
        images: [],
    });
    const [errState, setErrState] = useState<IAddProductErrState>({
        productName: "",
        description: "",
        labelledPrice: "",
        price: "",
        quantity: "",
        cardDescription: "",
        images: "",
    });
    const handleInputDetails = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputDetails({
            ...inputDetails,
            [name]: value,
        });
    };
    const handleSubmit = () => {
        console.log(inputDetails);
    };
    return (
        <div className="w-full h-full overflow-y-scroll">
            <div className="p-20 w-full h-full">
                <AddProductForm errState={errState} handleInputDetails={handleInputDetails} handleSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default AddProduct;
