import React from "react";
import { IAdminNavBtn } from "../../../../../utility/types/adminPanel/AdminPanel";

const AdminNavBtn: React.FC <IAdminNavBtn> = ({ onclick, btnName, Icon }) => {
    return (
        <button onClick={onclick} className='adminNavigationBtn'>{btnName}<span><Icon /></span></button>
    );
};

export default AdminNavBtn;
