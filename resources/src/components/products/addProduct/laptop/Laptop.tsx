import React, {  useState } from "react";
import { Link } from "react-router";
import AddProductIcon from "../../../icon/AddProductIcon.tsx";
import LaptopIcon from "../../../icon/LaptopIcon.tsx";
import LaptopForm from "./LaptopForm.tsx";

const Laptop: React.FC = () => {
    const [inputDetails, setInputDetails] = useState({
        category: "laptop",
        product_name: "",
        description: "",
        price: 0,
        image: "",
        brand: "",
        quantity: 0,
        long_description: "",
        ram: "",
        processor: "",
        storage: "",
        graphics: "",
        storage_type: "",
        display: "",
        color: "",
        screen_size: "",
        operating_system: "",
        battery: ""
    });
    console.log(inputDetails);
    const handleInputDetails = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setInputDetails({
            ...inputDetails,
            [name]: value,
        });
    };
    return (
        <div className='w-full h-full p-5 xl:p-20'>
            <div className='backdrop-blur-3xl pt-13 shadow-2xl h-full transition duration-300 relative rounded-2xl w-full'>
                <div className='absolute w-full top-4 left-4'>
                    <Link className='flex flex-row gap-3 font-semibold ' to='/admin/panel/add-product'>
                        <span><AddProductIcon /></span> add product &gt; <span><LaptopIcon /></span> laptop
                    </Link>
                </div>
                <div className='bg-[#1a1a1a] w-full pt-2 px-5 overflow-y-auto h-full'>
                    <div className='max-w-7xl mx-auto py-6'>
                        <LaptopForm handleInputDetails={handleInputDetails} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Laptop;
