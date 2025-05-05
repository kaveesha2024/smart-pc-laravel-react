import React from "react";
import { ILaptopForm } from "../../../../utility/types/addProduct/AddProduct.ts";
import { useSelector } from "react-redux";
import InputField from "./commonComponents/InputField.tsx";
import { RootState } from "../../../../store.ts";
import InputSelect from "./commonComponents/InputSelect.tsx";


const LaptopForm:React.FC <ILaptopForm> = ({ handleInputDetails,handleSubmit, inputDetails, handleClear }) => {
    const select = useSelector((state: RootState) => state.addProduct.errState);
    return (
        <form className="space-y-4">
            <h1 className='text-white font-semibold text-xl text-center p-5'>Laptop Category</h1>
            <div className='flex flex-col gap-4'>
                <InputField
                    handleInputDetails={handleInputDetails}
                    name="product_name"
                    type="text"
                    errState={select.product_name}
                    label="Product Name"
                    value={inputDetails.product_name}
                /><InputField
                    handleInputDetails={handleInputDetails}
                    name="price"
                    type="number"
                    errState={select.price}
                    label="Price"
                    value={inputDetails.price}
                /><InputField
                    handleInputDetails={handleInputDetails}
                    name="quantity"
                    type="number"
                    errState={select.quantity}
                    label="Quantity"
                    value={inputDetails.quantity}
                /><InputField
                    handleInputDetails={handleInputDetails}
                    name="brand"
                    type="text"
                    errState={select.brand}
                    label="Brand"
                    value={inputDetails.brand}
                /><InputField
                    handleInputDetails={handleInputDetails}
                    name="color"
                    type="text"
                    errState={select.color}
                    label="Color"
                    value={inputDetails.color}
                /><InputField
                    handleInputDetails={handleInputDetails}
                    name="screen_size"
                    type="text"
                    errState={select.screen_size}
                    label="Screen Size"
                    value={inputDetails.screen_size}
                /><InputField
                    handleInputDetails={handleInputDetails}
                    name="battery"
                    type="text"
                    errState={select.battery}
                    label="Battery"
                    value={inputDetails.battery}
                /><InputField
                    handleInputDetails={handleInputDetails}
                    name="image"
                    type="text"
                    errState={select.image}
                    label="Image"
                    value={inputDetails.image}
                /><InputField
                    handleInputDetails={handleInputDetails}
                    name="description"
                    type="text"
                    errState={select.description}
                    label="Description"
                    value={inputDetails.description}
                />
                <div className='flex flex-row gap-10 bg-[#2a2a2a] shadow-lg justify-between w-full items-start rounded-lg p-3 hover:bg-[#333333] transition-all duration-300'>
                    <label htmlFor="long_description" className="text-gray-200 font-medium min-w-[150px] pt-2">Long Description</label>
                    <textarea
                        id="long_description"
                        name="long_description"
                        value={inputDetails.long_description}
                        rows={4}
                        onChange={handleInputDetails}
                        className="flex-1 p-2 outline-none bg-[#1a1a1a] rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-gray-500 transition-all duration-300"
                    />
                </div>
                    <InputSelect
                        handleInputDetails={handleInputDetails}
                        value={inputDetails.ram}
                        name="ram"
                        errState={select.ram}
                        label="Ram"
                        options={["4GB", "8GB", "16GB", "32GB", "64GB"]}
                    /><InputSelect
                        handleInputDetails={handleInputDetails}
                        value={inputDetails.graphics}
                        name="graphics"
                        errState={select.graphics}
                        label="Graphics"
                        options={["Nvidia", "AMD"]}
                    /><InputSelect
                        handleInputDetails={handleInputDetails}
                        value={inputDetails.processor}
                        name="processor"
                        errState={select.processor}
                        label="Processor"
                        options={["Intel", "AMD"]}
                    /><InputSelect
                        handleInputDetails={handleInputDetails}
                        value={inputDetails.storage}
                        name="storage"
                        errState={select.storage}
                        label="Storage"
                        options={["128GB", "256GB", "512GB", "1TB", "2TB", "4TB", "8TB"]}
                    /><InputSelect
                        handleInputDetails={handleInputDetails}
                        value={inputDetails.storage_type}
                        name="storage_type"
                        errState={select.storage_type}
                        label="Storage Type"
                        options={["SSD", "HDD", "NVME"]}
                    /><InputSelect
                        handleInputDetails={handleInputDetails}
                        value={inputDetails.display}
                        name="display"
                        errState={select.display}
                        label="Display"
                        options={ ["IPS", "LED", "OLED", "LCD"]}
                    /><InputSelect
                        handleInputDetails={handleInputDetails}
                        value={inputDetails.operating_system}
                        name="operating_system"
                        errState={select.operating_system}
                        label="Operating System"
                        options={["Windows 11 Home Single Language", "Windows 10 Home Single Language", "Windows 10 Pro", "Ubuntu"]}
                    />
            </div>
            <div className="flex justify-between pt-6 pb-4">
                <button onClick={handleClear} type="button" className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold py-2 px-6 rounded-lg shadow-lg transition-all duration-300 focus:ring-2 focus:ring-gray-500">Clear</button>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold py-2 px-6 rounded-lg shadow-lg transition-all duration-300 focus:ring-2 focus:ring-gray-500"
                >
                    Save Product
                </button>
            </div>
        </form>
    );
};

export default LaptopForm;
