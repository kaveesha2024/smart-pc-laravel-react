import React  from "react";
import 'aos/dist/aos.css';
import { useNavigate } from "react-router";
import { IProduct, IProductSectionProps } from "../../../utility/types/product/productSection/productSection";


const ProductSection: React.FC <IProductSectionProps> = ({ products }) => {
    const navigate = useNavigate();
    return (
        <div className="p-6 bg-gray-100  min-h-screen">
            {/* <h2 className="text-2xl font-bold mb-6 text-center">{category}</h2> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product: IProduct, index: number) => (
                    <div key={index} className="bg-white shadow-md rounded-2xl transition duration-300 p-4 hover:shadow-2xl">
                        <img src={product.product_images[0]} alt='image not found !' className="w-full h-100 object-cover rounded-xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{product.product_name}</h3>
                        <p className="text-gray-600 mb-4">{product.card_description}</p>
                        <button onClick={() => {navigate(`product/${product.product_id}`, {state: product})}} className="px-4 py-2 duration-300 cursor-pointer bg-[#493628] text-white rounded  transition">View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSection;
