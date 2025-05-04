import React from "react";
import { IInputDetails } from "../../../../utility/types/addProduct/AddProduct.ts";


const LaptopForm:React.FC <IInputDetails> = ({ handleInputDetails }) => {
    return (
        <form className="space-y-4">
            <h1 className='text-white font-semibold text-xl text-center p-5'>Laptop Category</h1>
            <div className='flex flex-col gap-4'>
                {[
                    { id: "product_name", label: "Product Name", type: "text" },
                    { id: "price", label: "Price", type: "number" },
                    { id: "quantity", label: "Quantity", type: "number" },
                    { id: "brand", label: "Brand", type: "text" },
                    { id: "color", label: "Color", type: "text" },
                    { id: "screen_size", label: "Screen Size", type: "text" },
                    { id: "battery", label: "Battery Capacity (Mph.)", type: "text" },
                    { id: "image", label: "Product Image", type: "text" },
                    { id: "description", label: "Short Description", type: "text" }
                ].map((field) => (
                    <div key={field.id} className='flex flex-row gap-10 bg-[#2a2a2a] shadow-lg justify-between w-full items-center rounded-lg p-3 hover:bg-[#333333] transition-all duration-300'>
                        <label htmlFor={field.id} className="text-gray-200 font-medium min-w-[150px]">{field.label}</label>
                        <p className='text-red-500 font-semibold'>Error</p>
                        <input
                            type={field.type}
                            id={field.id}
                            name={field.id}
                            onChange={handleInputDetails}
                            className="flex-1 p-2 outline-none bg-[#1a1a1a] rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-gray-500 transition-all duration-300"
                        />
                    </div>
                ))}
                <div className='flex flex-row gap-10 bg-[#2a2a2a] shadow-lg justify-between w-full items-start rounded-lg p-3 hover:bg-[#333333] transition-all duration-300'>
                    <label htmlFor="long_description" className="text-gray-200 font-medium min-w-[150px] pt-2">Long Description</label>
                    <p className='text-red-500 font-semibold'>Error</p>
                    <textarea
                        id="long_description"
                        name="long_description"
                        rows={4}
                        onChange={handleInputDetails}
                        className="flex-1 p-2 outline-none bg-[#1a1a1a] rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-gray-500 transition-all duration-300"
                    />
                </div>
                {[
                    {
                        id: "graphics",
                        label: "Graphics",
                        options: ["Nvidia", "AMD"]
                    },
                    {
                        id: "ram",
                        label: "Ram",
                        options: ["4GB", "8GB", "16GB", "32GB", "64GB"]
                    },
                    {
                        id: "processor",
                        label: "Processor",
                        options: ["Intel", "AMD"]
                    },
                    {
                        id: "storage",
                        label: "Storage",
                        options: ["128GB", "256GB", "512GB", "1TB", "2TB", "4TB", "8TB"]
                    },
                    {
                        id: "storage_type",
                        label: "Storage Type",
                        options: ["SSD", "HDD", "NVME"]
                    },
                    {
                        id: "display",
                        label: "Display",
                        options: ["IPS", "LED", "OLED", "LCD"]
                    },
                    {
                        id: "operating_system",
                        label: "Operating System",
                        options: ["Windows 11 Home Single Language", "Windows 10 Home Single Language", "Windows 10 Pro", "Ubuntu"]
                    }
                ].map((field) => (
                    <div key={field.id} className='flex flex-row gap-10 bg-[#2a2a2a] shadow-lg justify-between w-full items-center rounded-lg p-3 hover:bg-[#333333] transition-all duration-300'>
                        <label htmlFor={field.id} className="text-gray-200 font-medium min-w-[150px]">{field.label}</label>
                        <p className='text-red-500 font-semibold'>Error</p>
                        <select
                            id={field.id}
                            name={field.id}
                            onChange={handleInputDetails}
                            className="flex-1 p-2 outline-none bg-[#1a1a1a] rounded-lg text-gray-200 focus:ring-2 focus:ring-gray-500 transition-all duration-300"
                        >
                            <option value="" className="bg-[#1a1a1a]">Select {field.label}</option>
                            {field.options.map(option => (
                                <option key={option} value={option} className="bg-[#1a1a1a]">{option}</option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
            <div className="flex justify-end pt-6 pb-4">
                <button
                    type="button"
                    className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold py-2 px-6 rounded-lg shadow-lg transition-all duration-300 focus:ring-2 focus:ring-gray-500"
                >
                    Save Product
                </button>
            </div>
        </form>
    );
};

export default LaptopForm;
