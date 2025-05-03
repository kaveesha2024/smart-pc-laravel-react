import React, { useState } from "react";
import AllUsersIcon from "./commonComponents/icon/AllUsersIcon.tsx";
import AddProductIcon from "./commonComponents/icon/AddProductIcon.tsx";
import TotalProductIcon from "./commonComponents/icon/TotalProductIcon.tsx";
import CreateUserIcon from "./commonComponents/icon/CreateUserIcon.tsx";
import OrdersIcon from "./commonComponents/icon/OrdersIcon.tsx";
import { useDispatch } from "react-redux";
import { signOut } from "../../../utility/slices/authentication/authenticationSlice.ts";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2'
import AdminNavBtn from "./commonComponents/adminNavigationBtn/AdminNavBtn.tsx";
import HomeIcon from "./commonComponents/icon/HomeIcon.tsx";

const AdminNavigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleSignOut = () => {
        Swal.fire({
            title: "Sign out",
            text: "Are you sure you want to sign out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(signOut())
                navigate("/");
            }
        });
    }
    return (
        <>
            <button
                className="md:hidden fixed top-4 left-4 z-70 bg-white p-2 rounded shadow"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <div className={`fixed top-0 left-0 h-full z-60 transition-transform duration-300 ease-in-out
                backdrop-blur-md text-[#14181B] shadow-2xl flex flex-col justify-between p-4
                w-64 md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:static md:flex`}>
                <div>
                    <div className="flex flex-col items-start justify-center">
                        <div className="flex justify-center items-center relative gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                viewBox="0 -960 960 960"
                                width="24"
                                fill="currentColor"
                                className="mt-1"
                            >
                                <path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z" />
                            </svg>
                            <span className="font-bold text-4xl">DashBoard</span>
                        </div>
                        <span className='font-semibold text-xl'>Welcome Admin</span>
                    </div>
                    <div className="w-full flex flex-col gap-2 justify-center items-start mt-5">
                        <button onClick={()=>{navigate("/admin/panel")}} className='adminNavigationBtn pt-4 border-t-1'>Dashboard <span><HomeIcon /></span></button>
                        <AdminNavBtn onclick={()=>{navigate('/')}} btnName="Total Users" Icon={AllUsersIcon} />
                        <AdminNavBtn onclick={()=>{navigate('/')}} btnName="Total Products" Icon={TotalProductIcon} />
                        <AdminNavBtn onclick={()=>{navigate('/')}} btnName="Add Product" Icon={AddProductIcon} />
                        <AdminNavBtn onclick={()=>{navigate('/')}} btnName="Create User" Icon={CreateUserIcon} />
                        <AdminNavBtn onclick={()=>{navigate('/')}} btnName="Orders" Icon={OrdersIcon} />
                    </div>
                </div>
                <div className='hover:text-white transition'>
                    <button onClick={handleSignOut} className='font-semibold text-xl cursor-pointer flex justify-between py-3 border-b-1 border-t-1 w-full text-start'>
                        Sign out <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" /></svg></span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default AdminNavigation;
