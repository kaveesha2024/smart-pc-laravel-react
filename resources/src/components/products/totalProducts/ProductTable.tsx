import React from "react";
import Loader from "../../loader/Loader.tsx";
import {
    IAllProducts,
    IProductTableProp,
} from "../../../utility/types/product/getProducts/GetProducts";

const ProductTable: React.FC<IProductTableProp> = ({
    allProducts,
    isLoading,
}) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Labelled Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Discount
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Card Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product Images
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4">No Products Found !</td>
                        </tr>
                    ) : allProducts.length > 0 ? (
                        allProducts.map(
                            (product: IAllProducts, index: number) => (
                                <tr
                                    key={index}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                    <td className="px-6 py-4">
                                        {product.product_id}
                                    </td>
                                    <td className="px-6 py-4">
                                        {product.product_name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {product.description}
                                    </td>
                                    <td className="px-6 py-4">
                                        {product.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {product.labelled_price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {product.discount}
                                    </td>
                                    <td className="px-6 py-4">
                                        {product.quantity}
                                    </td>
                                    <td className="px-6 py-4">
                                        {product.card_description}
                                    </td>
                                    <td className="px-6 py-4">
                                        {product.product_images[0]}
                                    </td>
                                </tr>
                            ),
                        )
                    ) : (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-4">
                                <Loader />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
