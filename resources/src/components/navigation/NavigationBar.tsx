import React from "react";
import LinkTag from "./commonComponents/LinkTag.tsx";
import { Link, useNavigate } from "react-router";

const NavigationBar:React.FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="w-full h-[78px] flex items-center absolute top-0 justify-around backdrop-blur-2xl shadow-2xl ">
                <div className=" text-2xl font-bold text-[#DBDBDB] select-none">
                    <Link to="/">Smart PC</Link>
                </div>
                <div className="">
                    <LinkTag uri='/' name='Laptops' />
                    <LinkTag uri='/' name='Desktop' />
                    <LinkTag uri='/' name='Monitors' />
                    <LinkTag uri='/' name='Accessories' />
                    <LinkTag uri='/' name='Mobiles' />
                </div>
                <div>
                    <button onClick={()=>{
                        navigate('/user/signin');
                    }} className="bg-neutral-700 text-[#DBDBDB] px-4 py-2 rounded-md cursor-pointer  font-semibold focus:outline-none transition hover:bg-[#DBDBDB] hover:text-black hover:font-semibold ">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
