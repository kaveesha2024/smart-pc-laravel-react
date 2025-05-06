import React, { useEffect } from "react";
import PanelLargeBtn from "../commonComponents/panelLargeBtn/PanelLargeBtn.tsx";
import AllUsersIcon from "../../icon/AllUsersIcon.tsx";
import TotalProductIcon from "../../icon/TotalProductIcon.tsx";
import OrdersIcon from "../../icon/OrdersIcon.tsx";
import VisibilityIcon from "../../icon/VisibilityIcon.tsx";
import DashboardApi from "../../../utility/api/dashboard/DashboardApi.ts";
import { useDispatch, useSelector } from "react-redux";
import { dispatch } from "../../../store.ts";

const Dashboard: React.FC = () => {
    const dispatch = useDispatch<dispatch>();
    useEffect(() => {
        dispatch(DashboardApi());
    }, []);
    const select = useSelector(state => state.dashboard);
    const users = select.latestSignupUsers;
    console.log(select);
    return (
        <div className='w-full h-full p-20 flex-col xl:flex-row flex gap-3 '>
            <div className='w-full h-full flex flex-wrap justify-start items-stretch gap-5 overflow-y-auto bg-white rounded-2xl shadow-2xl p-5 xl:w-[70%] '>
                <PanelLargeBtn count={select.totalUsers} btnName="Total Users" Icon={AllUsersIcon} />
                <PanelLargeBtn count={select.totalProducts} btnName="Total Products" Icon={TotalProductIcon} />
                <PanelLargeBtn count="0" btnName="Orders" Icon={OrdersIcon} />
                <PanelLargeBtn count="0" btnName="Total Viewers" Icon={VisibilityIcon} />
            </div>
            <div className="w-full xl:w-[30%] relative overflow-hidden z-50 h-full shadow-2xl rounded-2xl ">
                <div className='absolute top-0 transition duration-300 overflow-x-auto w-full h-full backdrop-blur-2xl'>
                    {users.length > 0 ? users.map((user, index) => (
                        <div key={index}>
                            <div className='flex flex-col sm:flex-row justify-between px-3 py-3 items-start sm:items-center w-full gap-3 sm:gap-0'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-12 h-12 bg-[#262B31] rounded-full overflow-hidden'>
                                        <img
                                            src="https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className='ml-1'>
                                        <h1 className='text-lg sm:text-xl text-[#262B31] font-bold'>{user.name}</h1>
                                        <p className='text-sm break-all'>{user.email}</p>
                                    </div>
                                </div>
                                {user.role === "admin" ? (
                                    <div className='border rounded-sm px-2 py-1 border-red-600 text-red-600 text-sm'>
                                        {user.role}
                                    </div>
                                ) : (
                                    <div className='border rounded-sm px-2 py-1 border-green-400 text-green-400 text-sm'>
                                        {user.role}
                                    </div>
                                )}
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
    );
};

export default Dashboard;
