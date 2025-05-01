import React, { useState } from "react";
import LinkTag from "./commonComponents/LinkTag.tsx";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../store.ts";

const NavigationBar: React.FC = () => {
    const navigate = useNavigate();
    const selector = useSelector((state: RootState) => state.authentication);
    const [isOpen, setIsOpen] = useState(false);
    const isAuthenticated = selector.isAuthenticated;
    return (
        <div className="w-full absolute top-0 z-50">
            <div className="w-full h-[78px] flex items-center justify-between px-6 md:px-12 backdrop-blur-2xl shadow-2xl">
                <div className="text-2xl font-bold text-[#DBDBDB] select-none">
                    <Link to="/">Smart PC</Link>
                </div>

                <div className="hidden md:flex gap-6">
                    <LinkTag uri="/" name="Laptops" />
                    <LinkTag uri="/" name="Desktop" />
                    <LinkTag uri="/" name="Monitors" />
                    <LinkTag uri="/" name="Accessories" />
                    <LinkTag uri="/" name="Mobiles" />
                </div>
                {isAuthenticated ? (
                    <div className="hidden md:block">
                        <button
                            onClick={() => navigate("/user/signin")}
                            className="bg-[#FB9096] text-black cursor-pointer px-4 py-2 rounded-md font-semibold transition hover:bg-black hover:text-[#FB9096]"
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div className="hidden md:block">
                        <button
                            onClick={() => navigate("/user/signin")}
                            className="bg-[#FB9096] text-black cursor-pointer px-4 py-2 rounded-md font-semibold transition hover:bg-black hover:text-[#FB9096]"
                        >
                            Login
                        </button>
                    </div>
                )}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#DBDBDB] focus:outline-none text-3xl"
                    >
                        {isOpen ? <span>&times;</span> : <span>&#9776;</span>}
                    </button>
                </div>
            </div>
            <div
                className={`md:hidden overflow-hidden transform transition-all duration-500 ease-in-out ${
                    isOpen
                        ? "opacity-100 translate-y-0 max-h-screen"
                        : "opacity-0 -translate-y-5 max-h-0"
                }  backdrop-blur-sm`}
            >
                <div className="flex flex-col items-center py-6 space-y-4">
                    <LinkTag uri="/" name="Laptops" />
                    <LinkTag uri="/" name="Desktop" />
                    <LinkTag uri="/" name="Monitors" />
                    <LinkTag uri="/" name="Accessories" />
                    <LinkTag uri="/" name="Mobiles" />
                    {isAuthenticated ? (
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                navigate("/user/signin");
                            }}
                            className="bg-[#FB9096] text-black px-4 py-2 rounded-md font-semibold transition hover:bg-black hover:text-[#FB9096]"
                        >
                            Sign Out
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                navigate("/user/signin");
                            }}
                            className="bg-[#FB9096] text-black px-4 py-2 rounded-md font-semibold transition hover:bg-black hover:text-[#FB9096]"
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
