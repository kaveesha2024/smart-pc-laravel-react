import React from "react";
import AdminNavigation from "../../../components/navigation/adminPanel/AdminNavigation.tsx";
import { Route, Routes } from "react-router";
import Dashboard from "../../../components/adminPanel/dashboard/Dashboard.tsx";
import TotalUsers from "../../../components/user/totalUsers/TotalUsers.tsx";
import UpdateUserForm from "../../../components/user/updateUser/UpdateUserForm.tsx";
import TotalProducts from "../../../components/products/totalProducts/TotalProducts.tsx";
import AddProduct from "../../../components/products/addProduct/AddProduct.tsx";

const Panel: React.FC = () => {

    return (
        <div className='w-full h-screen flex'>
            <AdminNavigation />
            <div className='flex flex-col w-full  h-full'>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/total-products' element={<TotalProducts />} />
                    <Route path='/total-products/add-product' element={<AddProduct />} />
                    <Route path='/users' element={<TotalUsers />} />
                    <Route path='/users/update' element={<UpdateUserForm />} />
                </Routes>
            </div>
        </div>
    );
};

export default Panel;
