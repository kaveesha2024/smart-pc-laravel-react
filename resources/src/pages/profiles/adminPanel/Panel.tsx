import React from "react";
import AdminNavigation from "../../../components/navigation/adminPanel/AdminNavigation.tsx";
import StatusBar from "../../../components/navigation/adminPanel/StatusBar.tsx";
import { Route, Routes } from "react-router";
import Dashboard from "../../../components/adminPanel/dashboard/Dashboard.tsx";
import AddProduct from "../../../components/products/addProduct/AddProduct.tsx";
import Laptop from "../../../components/products/addProduct/laptop/Laptop.tsx";
import TotalUsers from "../../../components/user/totalUsers/TotalUsers.tsx";

const Panel: React.FC = () => {

    return (
        <div className='w-full h-screen flex bg-[url("/admin-panel.jpg")] no-repeat fixed center center bg-cover bg-center bg-no-repeat '>
            <AdminNavigation />
            <div className='flex flex-col w-full h-full'>
                <StatusBar />
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/add-product' element={<AddProduct />} />
                    <Route path='/add-product/laptop' element={<Laptop />} />
                    <Route path='/total-users' element={<TotalUsers />} />
                </Routes>
            </div>
        </div>
    );
};

export default Panel;
