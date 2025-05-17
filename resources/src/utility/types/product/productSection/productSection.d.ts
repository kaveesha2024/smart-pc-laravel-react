export interface IProduct {
    product_id: string;
    product_name: string;
    discount: string;
    card_description: string;
    product_images: string[];
    price: string;
    labelled_price: string;
    description: string;
    quantity: number;
};

export interface IProductSectionProps {
    products: IProduct[];
}
