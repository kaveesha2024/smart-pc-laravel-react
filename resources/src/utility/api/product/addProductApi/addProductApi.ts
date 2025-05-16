import toast from "react-hot-toast";
import GetImageUrlsPromise from "../../../promises/getImageUrls/GetImageUrlsPromise.ts";
import axios from "axios";
import { store } from "../../../../store.ts";
import {
    IAddProductDetails,
    IAddProductErrState,
} from "../../../types/product/addProduct/AddProduct";

const addProductApi = async (
    inputDetails: IAddProductDetails,
    setErrState: (
        value:
            | ((prevState: IAddProductErrState) => IAddProductErrState)
            | IAddProductErrState,
    ) => void,
    errState: IAddProductErrState,
    setInputDetails: (
        value:
            | ((prevState: IAddProductDetails) => IAddProductDetails)
            | IAddProductDetails,
    ) => void,
) => {
    const token = store.getState().authentication.token;
    if (
        inputDetails.productName === "" ||
        inputDetails.description === "" ||
        inputDetails.labelledPrice === 0 ||
        inputDetails.price === 0 ||
        inputDetails.quantity === 0 ||
        inputDetails.cardDescription === ""
    ) {
        toast.error("Please fill all the fields");
        return;
    }
    if (inputDetails.images.length <= 0) {
        setErrState({
            ...errState,
            images: "Please select at least one image",
        });
        return;
    }
    const addProductApiToast = toast.loading("Loading...");
    let promisedImages = [];
    for (let i = 0; i < inputDetails.images.length; i++) {
        promisedImages[i] = GetImageUrlsPromise(inputDetails.images[i]);
    }
    try {
        const publicUrlsOfProductImages = await Promise.all(promisedImages);

        const product = {
            description: inputDetails.description,
            product_name: inputDetails.productName,
            price: inputDetails.price,
            labelled_price: inputDetails.labelledPrice,
            quantity: inputDetails.quantity,
            product_images: publicUrlsOfProductImages.join(", "),
            card_description: inputDetails.cardDescription,
        };
        try {
            const response = await axios.post(
                "api/products/add-product",
                product,
                {
                    headers: { Authorization: "Bearer " + token },
                },
            );
            if (response.data.status === 200) {
                toast.success("Product added successfully");
                setInputDetails({
                    productName: "",
                    description: "",
                    labelledPrice: 0,
                    price: 0,
                    quantity: 0,
                    cardDescription: "",
                    images: [],
                });
                toast.dismiss(addProductApiToast);
                return true;
            }
            if (response.data.status === 422) {
                const errorFieldMappings = {
                    product_name: "productName",
                    description: "description",
                    labelled_price: "labelledPrice",
                    price: "price",
                    quantity: "quantity",
                    card_description: "cardDescription"
                };

                for (const [apiField, stateField] of Object.entries(errorFieldMappings)) {
                    if (response.data.errors[apiField]) {
                        setErrState({
                            ...errState,
                            [stateField]: response.data.errors[apiField][0]
                        });
                        toast.dismiss(addProductApiToast);
                        return;
                    }
                }
            }
        } catch (error) {
            toast.dismiss(addProductApiToast);
            console.log(error);
        }
    } catch (error) {
        toast.dismiss(addProductApiToast);
        console.log(error);
    }
};
export default addProductApi;
