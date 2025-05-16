import React, { useEffect, useState } from "react";
import ProductTable from "./ProductTable.tsx";
import { IAllProducts } from "../../../utility/types/product/getProducts/GetProducts";
import fetchAllProductApiCall from "../../../utility/api/product/getAllProductApi/fetchAllProductsData.ts";

const TotalProducts: React.FC = () => {
    const [allProducts, setAllProducts] = useState<IAllProducts[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        if (isLoading) {
            fetchAllProductsData();
            setIsLoading(false);
            return;
        }
    }, [isLoading]);
    const fetchAllProductsData = async (): Promise<void> => {
        await fetchAllProductApiCall(setAllProducts);
    };
    return (
        <div className="px-20 pt-20 overflow-y-auto">
            <ProductTable allProducts={allProducts} isLoading={isLoading} />
        </div>
    );
};

export default TotalProducts;
