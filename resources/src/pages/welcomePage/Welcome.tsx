import React, { useEffect, useState } from "react";
import HeroSection from "../../components/hero/HeroSection.tsx";
import ProductSection from "../../components/products/productSection/productSection.tsx";
import Footer from "../../components/footer/Footer.tsx";
import axios from "axios";

const Welcome:React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (isLoading){
            getAllProducts();
            setIsLoading(false);
            return;
        }
    }, []);
    const getAllProducts = async () => {
        try {
            const response = await axios.get('/api/products');
            if (response.data.status === 200) {
                setProducts(response.data.products);
                return
            }
            
        }catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    console.log(products);

    return (
        <div>
            <HeroSection />
            <ProductSection products={products} />
            <Footer />
        </div>
    );
};

export default Welcome;
