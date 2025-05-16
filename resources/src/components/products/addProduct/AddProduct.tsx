import React, { ChangeEvent, useState } from "react";
import AddProductForm from "./AddProductForm.tsx";
import addProductApi from "../../../utility/api/product/addProductApi/addProductApi.ts";
import { IAddProductDetails, IAddProductErrState } from "../../../utility/types/product/addProduct/AddProduct";
import {useNavigate} from "react-router";

const AddProduct: React.FC = () => {
    const navigate = useNavigate();
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
    console.log(errState);
    const handleInputDetails = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setErrState({
            productName: "",
            description: "",
            labelledPrice: "",
            price: "",
            quantity: "",
            cardDescription: "",
            images: "",
        })
        setInputDetails({
            ...inputDetails,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        const response = await addProductApi(inputDetails, setErrState, errState, setInputDetails);
        if (response){
            navigate('/admin/panel/total-products');
        }
    };
    return (
        <div className="w-full h-full overflow-y-scroll">
            <div className="p-20 w-full h-full">
                <AddProductForm
                    errState={errState}
                    setInputDetails={setInputDetails}
                    inputDetails={inputDetails}
                    handleInputDetails={handleInputDetails}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    );
};

export default AddProduct;
