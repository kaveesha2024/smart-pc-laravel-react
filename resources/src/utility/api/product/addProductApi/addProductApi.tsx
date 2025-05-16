import toast from "react-hot-toast";
import GetImageUrlsPromise from "../../../promises/getImageUrls/GetImageUrlsPromise.ts";
import axios from "axios";
import {
    IAddProductDetails,
    IAddProductErrState,
} from "../../../../components/products/addProduct/AddProduct.tsx";
import { store } from "../../../../store.ts";

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
)=> {
     const token = store.getState().authentication.token
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
    let promisedImages = [];
    for (let i = 0; i < inputDetails.images.length; i++) {
        promisedImages[i] = GetImageUrlsPromise(inputDetails.images[i]);
    }
    try {
        const publicUrlsOfProductImages = await Promise.all(promisedImages);

        const product = {
            product_id: "SMP0000001",
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
            console.log(response.data);
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
                return;
            }
            if (response.data.status === 422) {
                if (response.data.errors.product_name) {
                    setErrState({
                        ...errState,
                        productName: response.data.errors.product_name[0],
                    });
                    return;
                }
                if (response.data.errors.description) {
                    setErrState({
                        ...errState,
                        description: response.data.errors.description[0],
                    });
                    return;
                }
                if (response.data.errors.labelled_price) {
                    setErrState({
                        ...errState,
                        labelledPrice: response.data.errors.labelled_price[0],
                    });
                    return;
                }
                if (response.data.errors.price) {
                    setErrState({
                        ...errState,
                        price: response.data.errors.price[0],
                    });
                    return;
                }
                if (response.data.errors.quantity) {
                    setErrState({
                        ...errState,
                        quantity: response.data.errors.quantity[0],
                    });
                    return;
                }
                if (response.data.errors.card_description) {
                    setErrState({
                        ...errState,
                        cardDescription:
                            response.data.errors.card_description[0],
                    });
                    return;
                }
            }
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }
}
export default addProductApi;
