import { IAllProducts } from "../../../types/product/getProducts/GetProducts";
import axios from "axios";

async function fetchAllProductApiCall(
    setAllProducts: (
        value: ((prevState: IAllProducts[]) => IAllProducts[]) | IAllProducts[],
    ) => void,
): Promise<void> {
    try {
        const response = await axios.get("/api/products");
        if (response.data.status === 200) {
            const products = response.data.products;
            products.map((product: IAllProducts) => {
                product.price = Number(product.price);
                product.labelled_price = Number(product.labelled_price);
                product.discount = Number(product.discount);
            });
            setAllProducts(response.data.products);
        }
    } catch (error) {
        console.log(error);
    }
}
export default fetchAllProductApiCall;
