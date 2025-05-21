import { IUpdatedProductTypes } from "../../../types/product/updateProduct/updateProduct";
import { IAllProducts } from "../../../types/product/getProducts/GetProducts";
import getImageUrlsPromise from "../../../promises/getImageUrls/GetImageUrlsPromise.ts";
import axios from "axios";
import toast from "react-hot-toast";
import { NavigateFunction } from "react-router";

const updateProductAction = async (
    file: FileList | null,
    updatedProduct: IUpdatedProductTypes,
    token: string,
    product: IAllProducts,
    navigate: NavigateFunction,
) => {
    if (file !== null && file.length > 0) {
        let promiseArray = [];
        for (let i = 0; i < file.length; i++) {
            promiseArray[i] = getImageUrlsPromise(file[i]);
        }
        try {
            const imageUrls = await Promise.all(promiseArray);

            updatedProduct.product_images =
                imageUrls.length > 1 ? imageUrls.join(", ") : imageUrls[0];
        } catch (e) {
            console.log(e);
        }
    }
    try {
        const response = await axios.put(
            `/api/product/update/`,
            updatedProduct,
            {
                headers: { Authorization: "Bearer " + token },
                params: { productId: product.product_id },
            },
        );

        if (response.data.status === 200) {
            navigate(-1);
            toast.success("Product Updated Successfully");
            return;
        }

        toast.error("please fill all the fields");

        console.log(response);
    } catch (e) {
        console.log(e);
        toast.error("Something went wrong");
    }
};
export default updateProductAction;
