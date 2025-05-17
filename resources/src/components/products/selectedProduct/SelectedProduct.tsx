import React, { useState } from "react";
import { NavigateFunction, useLocation, useNavigate } from "react-router";
import { IProduct } from "../productSection/productSection";

const SelectedProduct: React.FC = () => {
    const productDetails: IProduct  = useLocation ().state;
    const navigate: NavigateFunction = useNavigate();
    const {
        product_name,
        product_images,
        product_id,
        discount,
        price,
        labelled_price,
        card_description,
        description,
    } = productDetails;

    // Convert description to array of sentences
    const descriptionArray: string[] = description
        ? description.split(', ').map((s: string) => s.trim()).filter(Boolean)
        : [];

    // Slideshow state
    const [currentImg, setCurrentImg] = useState<number>(0);

    const prevImg = () => setCurrentImg((prev) => prev === 0 ? product_images.length - 1 : prev - 1);
    const nextImg = () => setCurrentImg((prev) => prev === product_images.length - 1 ? 0 : prev + 1);

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-8">
            <button
                onClick={() => navigate("/")}
                className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition-colors duration-200"
            >
                ← Back to Home
            </button>
            <h1 className="text-3xl font-bold mb-4">{product_name}</h1>
            <div className="relative w-full flex justify-center items-center mb-6">
                <button
                    onClick={prevImg}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow hover:bg-gray-300"
                    aria-label="Previous image"
                >
                    &#8592;
                </button>
                <img
                    src={product_images[currentImg]}
                    alt={`Product ${currentImg + 1}`}
                    className="w-80 h-80 object-cover rounded-xl mb-0"
                />
                <button
                    onClick={nextImg}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow hover:bg-gray-300"
                    aria-label="Next image"
                >
                    &#8594;
                </button>
            </div>
            <div className="mb-4">
                <span className="text-lg font-semibold text-blue-700 mr-2">Price:</span>
                <span className="text-xl font-bold text-gray-900 mr-2">{price}</span>
                {labelled_price && (
                    <span className="text-gray-400 line-through mr-2">{labelled_price}</span>
                )}
                {discount && (
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">{discount} OFF</span>
                )}
            </div>
            <div className="mb-2 text-gray-700">{card_description}</div>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
                {descriptionArray.map((sentence: string, index: number) => (
                    <li key={index}>{sentence}.</li>
                ))}
            </ul>
            <div className="mt-6 text-xs text-gray-400">Product ID: {product_id}</div>
        </div>
    );
};

export default SelectedProduct;