import React from "react";
import AdminNavigation from "../../../components/navigation/adminPanel/AdminNavigation.tsx";
import StatusBar from "../../../components/navigation/adminPanel/StatusBar.tsx";
import PanelLargeBtn from "../../../components/adminPanel/panelLargeBtn/PanelLargeBtn.tsx";
import AllUsersIcon from "../../../components/navigation/adminPanel/commonComponents/icon/AllUsersIcon.tsx";
import TotalProductIcon from "../../../components/navigation/adminPanel/commonComponents/icon/TotalProductIcon.tsx";
import OrdersIcon from "../../../components/navigation/adminPanel/commonComponents/icon/OrdersIcon.tsx";
import VisibilityIcon from "../../../components/navigation/adminPanel/commonComponents/icon/VisibilityIcon.tsx";

const Panel: React.FC = () => {
    return (
        <div className='w-full h-screen flex bg-[url("/admin-panel.jpg")] no-repeat center center bg-cover bg-center bg-no-repeat '>
            <AdminNavigation />
            <div className='flex flex-col w-full h-full'>
                <StatusBar />
                <div className='w-full h-full p-20 flex bg-red-300'>
                    <div className='bg-red-800 w-full h-full flex gap-2'>
                        <PanelLargeBtn count="0" btnName="Total Users" Icon={AllUsersIcon} />
                        <PanelLargeBtn count="0" btnName="Total Products" Icon={TotalProductIcon} />
                        <PanelLargeBtn count="0" btnName="Orders" Icon={OrdersIcon} />
                        <PanelLargeBtn count="0" btnName="Total Viewers" Icon={VisibilityIcon} />
                    </div>
                    <div className="w-[30%] h-full bg-cyan-700">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panel;
