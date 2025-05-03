import React from "react";
import AdminNavigation from "../../../components/navigation/adminPanel/AdminNavigation.tsx";
import StatusBar from "../../../components/navigation/adminPanel/StatusBar.tsx";
import PanelLargeBtn from "../../../components/adminPanel/panelLargeBtn/PanelLargeBtn.tsx";
import AllUsersIcon from "../../../components/navigation/adminPanel/commonComponents/icon/AllUsersIcon.tsx";
import TotalProductIcon from "../../../components/navigation/adminPanel/commonComponents/icon/TotalProductIcon.tsx";
import OrdersIcon from "../../../components/navigation/adminPanel/commonComponents/icon/OrdersIcon.tsx";
import VisibilityIcon from "../../../components/navigation/adminPanel/commonComponents/icon/VisibilityIcon.tsx";

const Panel: React.FC = () => {
    const users = [
        {
            name: "Kaveesha",
            profilePicture: "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
            email: "sanaakaveesha@gmail.com",
            role: "user",
        },
        {
            name: "Nimesh",
            profilePicture: "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
            email: "nimesh@example.com",
            role: "admin",
        },
        {
            name: "Ishara",
            profilePicture: "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
            email: "ishara@example.com",
            role: "user",
        },
        {
            name: "Tharindu",
            profilePicture: "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
            email: "tharindu@example.com",
            role: "user",
        },
        {
            name: "Dinesh",
            profilePicture: "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
            email: "dinesh@example.com",
            role: "user",
        },
        {
            name: "Chathura",
            profilePicture: "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
            email: "chathura@example.com",
            role: "admin",
        },
        {
            name: "Sameera",
            profilePicture: "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
            email: "sameera@example.com",
            role: "user",
        },
        {
            name: "Anushka",
            profilePicture: "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
            email: "anushka@example.com",
            role: "user",
        },
        {
            name: "Thilini",
            profilePicture: "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
            email: "thilini@example.com",
            role: "admin",
        },
        {
            name: "Ravindu",
            profilePicture: "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
            email: "ravindu@example.com",
            role: "user",
        },
        {
            name: "Bhanuka",
            profilePicture: "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
            email: "bhanuka@example.com",
            role: "user",
        },
        {
            name: "Harshani",
            profilePicture: "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
            email: "harshani@example.com",
            role: "user",
        },
        {
            name: "Supun",
            profilePicture: "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
            email: "supun@example.com",
            role: "admin",
        },
        {
            name: "Kasun",
            profilePicture: "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
            email: "kasun@example.com",
            role: "user",
        },
        {
            name: "Isuru",
            profilePicture: "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
            email: "isuru@example.com",
            role: "user",
        },
        {
            name: "Sanduni",
            profilePicture: "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
            email: "sanduni@example.com",
            role: "admin",
        },
        {
            name: "Janith",
            profilePicture: "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
            email: "janith@example.com",
            role: "user",
        },
        {
            name: "Lahiru",
            profilePicture: "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
            email: "lahiru@example.com",
            role: "user",
        },
        {
            name: "Dinithi",
            profilePicture: "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
            email: "dinithi@example.com",
            role: "user",
        },
        {
            name: "Chamika",
            profilePicture: "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
            email: "chamika@example.com",
            role: "admin",
        },
    ];
    return (
        <div className='w-full h-screen flex bg-[url("/admin-panel.jpg")] no-repeat center center bg-cover bg-center bg-no-repeat '>
            <AdminNavigation />
            <div className='flex flex-col w-full h-full'>
                <StatusBar />
                <div className='w-full h-full p-20 flex gap-3 '>
                    <div className='w-full h-full flex gap-2'>
                        <PanelLargeBtn count="0" btnName="Total Users" Icon={AllUsersIcon} />
                        <PanelLargeBtn count="0" btnName="Total Products" Icon={TotalProductIcon} />
                        <PanelLargeBtn count="0" btnName="Orders" Icon={OrdersIcon} />
                        <PanelLargeBtn count="0" btnName="Total Viewers" Icon={VisibilityIcon} />
                    </div>
                    <div className="w-[30%] relative overflow-hidden z-50 h-full shadow-2xl rounded-2xl ">
                        <div className='absolute top-0 transition duration-300 overflow-x-auto w-full h-full backdrop-blur-2xl'>
                            {users.length >0 ? users.map((user, index) => (
                                <div key={index}>
                                    <div className=' flex justify-between px-3 items-center w-full h-20'>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-12 h-12 bg-[#262B31] rounded-full overflow-hidden '><img src="https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg" alt="" /></div>
                                            <div className='ml-2'>
                                                <h1 className='text-xl text-[#262B31] font-bold'>{user.name}</h1>
                                                <p className='text-sm'>{user.email}</p>
                                            </div>
                                        </div>
                                        {user.role === "admin" ? (
                                            <div className='border rounded-sm px-2 py-1 border-red-600 text-red-600 '>
                                                {user.role}
                                            </div>) : (
                                                <div className='border rounded-sm px-2 py-1 border-green-400 text-green-400 '>
                                                    {user.role}
                                            </div>)}

                                    </div>
                                    <div className='w-full flex justify-center items-center'>
                                        <div className='h-[1px] w-[75%] bg-[#262B31] rounded-full'></div>
                                    </div>
                                </div>
                            )) : <div className='w-full h-full flex justify-center items-center'>
                                <h1 className='text-xl text-[#262B31] font-bold'>No Users</h1>
                            </div>}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panel;
