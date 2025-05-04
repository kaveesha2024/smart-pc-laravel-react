import React from "react";
import { Link } from "react-router";
import AddProductIcon from "../../icon/AddProductIcon.tsx";

const AddProduct: React.FC = () => {
    return (
        <div className='w-full  h-full p-5 xl:p-20'>
            <div className='backdrop-blur-3xl shadow-2xl h-full transition duration-300 relative flex flex-col justify-center items-center gap-20 rounded-2xl w-full'>
                <div  className='absolute  w-full top-4 left-4'>
                    <Link className='flex flex-row gap-3 font-semibold' to='/admin/panel/add-product'><span><AddProductIcon /></span> add product</Link>
                </div>
                <h1 className=' text-center text-[#23282D] font-semibold lg:text-2xl '>Which type of product Do you need to add to the store?</h1>
                <div className='flex flex-col gap-5 w-full justify-center text-[#23282D] items-center xl:flex-row lg:gap-10 '>
                    <Link className='hover:cursor-pointer xl:shadow hover:underline hover:font-semibold transition xl:w-[200px]  xl:h-[200px] xl:flex xl:items-center xl:justify-center xl:rounded-2xl xl:bg-white xl:hover:shadow-2xl xl:hover:no-underline lg:duration-300 xl:hover:font-normal lg:text-xl xl:hover:scale-105' to='/admin/panel/add-product/laptop'>Laptop</Link>
                    <Link className='hover:cursor-pointer xl:shadow hover:underline hover:font-semibold transition xl:w-[200px]  xl:h-[200px] xl:flex xl:items-center xl:justify-center xl:rounded-2xl xl:bg-white xl:hover:shadow-2xl xl:hover:no-underline lg:duration-300 xl:hover:font-normal lg:text-xl xl:hover:scale-105' to='/admin/panel/add-product/laptop'>Desktop</Link>
                    <Link className='hover:cursor-pointer xl:shadow hover:underline hover:font-semibold transition xl:w-[200px]  xl:h-[200px] xl:flex xl:items-center xl:justify-center xl:rounded-2xl xl:bg-white xl:hover:shadow-2xl xl:hover:no-underline lg:duration-300 xl:hover:font-normal lg:text-xl xl:hover:scale-105' to='/admin/panel/add-product/laptop'>Mobile</Link>
                    <Link className='hover:cursor-pointer xl:shadow hover:underline hover:font-semibold transition xl:w-[200px]  xl:h-[200px] xl:flex xl:items-center xl:justify-center xl:rounded-2xl xl:bg-white xl:hover:shadow-2xl xl:hover:no-underline lg:duration-300 xl:hover:font-normal lg:text-xl xl:hover:scale-105' to='/admin/panel/add-product/laptop'>Monitor</Link>
                    <Link className='hover:cursor-pointer xl:shadow hover:underline hover:font-semibold transition xl:w-[200px]  xl:h-[200px] xl:flex xl:items-center xl:justify-center xl:rounded-2xl xl:bg-white xl:hover:shadow-2xl xl:hover:no-underline lg:duration-300 xl:hover:font-normal lg:text-xl xl:hover:scale-105' to='/admin/panel/add-product/laptop'>Accessories</Link>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
