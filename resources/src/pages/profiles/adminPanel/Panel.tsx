import React from "react";
import AdminNavigation from "../../../components/navigation/adminPanel/AdminNavigation.tsx";
import StatusBar from "../../../components/navigation/adminPanel/StatusBar.tsx";

const Panel: React.FC = () => {
    return (
        <div className='w-full h-screen flex bg-[url("/admin-panel.jpg")] no-repeat center center bg-cover bg-center bg-no-repeat '>
            <AdminNavigation />
            <div className='flex flex-col w-full h-full'>
                <StatusBar />
                <div className='w-full h-full p-20 flex bg-red-300'>
                    <div className='bg-red-800 w-full h-full flex gap-2'>
                        <button className='bg-green-300 cursor-pointer rounded-2xl w-[25%] h-[25%]'>
                            <span></span>
                            <p>Total Users</p>
                            <p>0</p>
                        </button>
                        <button className='bg-green-300 cursor-pointer rounded-2xl w-[25%] h-[25%]'></button>
                        <button className='bg-green-300 cursor-pointer rounded-2xl w-[25%] h-[25%]'></button>
                        <button className='bg-green-300 cursor-pointer rounded-2xl w-[25%] h-[25%]'></button>
                    </div>
                    <div className="w-[30%] h-full bg-cyan-700">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panel;
