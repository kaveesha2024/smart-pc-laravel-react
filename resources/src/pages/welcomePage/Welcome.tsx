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
    
    const laptops = [
        {
            name: "ASUS VivoBook 15",
            description: "A sleek and lightweight laptop with powerful performance for everyday use.",
            image: "https://dlcdnwebimgs.asus.com/gain/8eab0384-e8de-469a-b948-a28660db588c/", // Replace with actual image URL
        },
        {
            name: "Dell Inspiron 14",
            description: "Reliable and efficient laptop, perfect for both students and professionals.",
            image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/7441/pdp/notebook-inspiron-14-plus-7441-pdp-compatibility-windows-snapdragon.psd?fmt=jpg&wid=5000&hei=2812",
        },
        {
            name: "HP Pavilion x360",
            description: "A versatile 2-in-1 laptop with touchscreen and fast performance.",
            image: "https://www.laptop.lk/wp-content/uploads/2024/10/HP-Pavilion-x360-2-in-1-i5-05.webp",
        },
    ];
    // const mobiles = [
    //     {
    //         name: "Samsung Galaxy S24",
    //         description: "A flagship Android phone with powerful performance and an amazing display.",
    //         image: "https://celltronics.lk/wp-content/uploads/2024/01/Samsung-Galaxy-S24-Ultra-2.jpg", // Replace with actual image URL
    //     },
    //     {
    //         name: "iPhone 15 Pro",
    //         description: "Apple's latest device featuring the A17 chip and an enhanced camera system.",
    //         image: "https://www.apple.com/newsroom/videos/iphone-15-pro-action-button/posters/Apple-iPhone-15-Pro-lineup-Action-button-230912.jpg.large_2x.jpg",
    //     },
    //     {
    //         name: "OnePlus 12",
    //         description: "Smooth performance, fast charging, and a clean software experience.",
    //         image: "https://media.assettype.com/thequint%2F2023-12%2F8eb8fede-93da-4136-9f53-20e466ad81bb%2FOnePlus_12.webp",
    //     },
    // ];

    return (
        <div>
            <HeroSection />
            <ProductSection products={products} />
            {/* <ProductSection product={mobiles} category='Mobile collection' /> */}
            <Footer />
        </div>
    );
};

export default Welcome;
