import React, { useState } from "react";
import LinkTag from "./commonComponents/LinkTag.tsx";
import { Link, useNavigate } from "react-router";

const NavigationBar: React.FC = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full absolute top-0 z-50">
            <div className="w-full h-[78px] flex items-center justify-between px-6 md:px-12 backdrop-blur-2xl shadow-2xl">
                {/* Logo */}
                <div className="text-2xl font-bold text-[#DBDBDB] select-none">
                    <Link to="/">Smart PC</Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-6">
                    <LinkTag uri='/' name='Laptops' />
                    <LinkTag uri='/' name='Desktop' />
                    <LinkTag uri='/' name='Monitors' />
                    <LinkTag uri='/' name='Accessories' />
                    <LinkTag uri='/' name='Mobiles' />
                </div>

                {/* Login Button - desktop */}
                <div className="hidden md:block">
                    <button
                        onClick={() => navigate("/user/signin")}
                        className="bg-neutral-700 text-[#DBDBDB] px-4 py-2 rounded-md font-semibold transition hover:bg-[#DBDBDB] hover:text-black"
                    >
                        Login
                    </button>
                </div>

                {/* Hamburger Icon - mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#DBDBDB] focus:outline-none text-3xl"
                    >
                        {isOpen ? <span>&times;</span> : <span>&#9776;</span>}
                    </button>
                </div>
            </div>

            {/* Animated Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transform transition-all duration-500 ease-in-out ${
                    isOpen ? 'opacity-100 translate-y-0 max-h-screen' : 'opacity-0 -translate-y-5 max-h-0'
                }  backdrop-blur-sm`}
            >
                <div className="flex flex-col items-center py-6 space-y-4">
                    <LinkTag uri='/' name='Laptops' />
                    <LinkTag uri='/' name='Desktop' />
                    <LinkTag uri='/' name='Monitors' />
                    <LinkTag uri='/' name='Accessories' />
                    <LinkTag uri='/' name='Mobiles' />
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            navigate("/user/signin");
                        }}
                        className="bg-neutral-700 text-[#DBDBDB] px-4 py-2 rounded-md font-semibold transition hover:bg-[#DBDBDB] hover:text-black"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
