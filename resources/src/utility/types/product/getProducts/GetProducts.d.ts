import { IAllProducts } from "../../../../components/products/totalProducts/TotalProducts.tsx";

export interface IProductTableProp {
    allProducts: IAllProducts[];
    isLoading: boolean;
}
export interface IAllProducts {
    product_id: string;
    product_name: string;
    description: string;
    price: number;
    labelled_price: number;
    discount: number;
    quantity: number;
    card_description: string;
    product_images: string[];
}
