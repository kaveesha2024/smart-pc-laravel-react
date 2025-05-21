import React, { ChangeEvent, useState } from "react";
import UpdateProductForm from "./UpdateProductForm.tsx";
import { useLocation, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../../store.ts";
import { IAllProducts } from "../../../utility/types/product/getProducts/GetProducts";
import { IUpdatedProductTypes } from "../../../utility/types/product/updateProduct/updateProduct";
import updateProductAction from "../../../utility/api/product/updateProduct/updateProductAction.ts";

const UpdateProduct: React.FC = () => {
    const product: IAllProducts = useLocation().state;
    const navigate = useNavigate();
    const token: string = useSelector(
        (state: RootState) => state.authentication.token,
    );
    const [updatedProduct, setUpdatedProduct] = useState<IUpdatedProductTypes>({
        product_name: product.product_name,
        description: product.description,
        labelled_price: product.labelled_price,
        price: product.price,
        quantity: product.quantity,
        card_description: product.card_description,
        product_images: product.product_images.join(),
    });
    const handleInputField = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUpdatedProduct({
            ...updatedProduct,
            [name]: value,
        });
    };
    const handleSubmit = async (file: FileList | null) => {
        await updateProductAction(
            file,
            updatedProduct,
            token,
            product,
            navigate,
        );
    };
    return (
        <UpdateProductForm
            handleInputField={handleInputField}
            handleSubmit={handleSubmit}
            product={product}
        />
    );
};

export default UpdateProduct;
