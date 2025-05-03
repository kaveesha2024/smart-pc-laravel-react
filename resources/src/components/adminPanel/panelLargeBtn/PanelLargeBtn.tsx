import React from "react";

interface IPanelLargeBtn {
    btnName: string;
    count: string;
    Icon: React.FC;
}
const PanelLargeBtn: React.FC <IPanelLargeBtn> = ({ btnName, count, Icon }) => {
    return (
        <button className='backdrop-blur-sm shadow-2xl cursor-pointer flex justify-center items-center rounded-2xl w-[25%] h-[25%]'>
            <div className='flex flex-col'>
                <span className="w-full flex justify-center items-center"><Icon /></span>
                <p className='font-semibold'>{btnName}</p>
                <p>{count}</p>
            </div>
        </button>
    );
};

export default PanelLargeBtn;
