import React from "react";
import Loader from "../../loader/Loader.tsx";
import {
    IAllProducts,
    IProductTableProp,
} from "../../../utility/types/product/getProducts/GetProducts";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router";

const ProductTable: React.FC<IProductTableProp> = ({
    allProducts,
    isLoading,
}) => {
    const navigate = useNavigate();
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
                        <th scope="col" className="px-6 py-3">
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
                                        <img className=" w-[60px] h-[60px]" src={product.product_images[0]} alt="No image Found" />
                                        {/*{product.product_images[0]}*/}
                                    </td>
                                    <td className="px-6 flex gap-2 justify-center items-center h-full  py-4">
                                        <button className="bg-blue-500 transition hover:scale-110 duration-150 hover:bg-blue-900 p-2 rounded-sm text-white">Update</button>
                                        <button className="bg-red-500 p-2 rounded-sm hover:scale-110 transition duration-150 hover:bg-red-900 text-white">Delete</button>
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
            <div onClick={() => {navigate('add-product')}} className="text-6xl transition duration-300 hover:scale-110 hover:text-green-900 text-green-400 fixed bottom-10 right-5 ">
                <IoIosAddCircle />
            </div>
        </div>
    );
};

export default ProductTable;
