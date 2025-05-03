import React from "react";

interface IPanelLargeBtn {
    btnName: string;
    count: string;
    Icon: React.FC;
}
const PanelLargeBtn: React.FC<IPanelLargeBtn> = ({ btnName, count, Icon }) => {
    return (
        <button className="backdrop-blur-sm shadow-2xl cursor-pointer flex justify-center items-center rounded-2xl w-[100%] sm:w-[45%] md:w-[45%] xl:w-[30%] h-[100px] sm:h-[120px] md:h-[140px] xl:h-[40%] p-2">
            <div className="flex flex-col justify-center items-center text-center">
                <span className="w-full flex justify-center items-center mb-1">
                    <Icon />
                </span>
                <p className="font-semibold text-sm sm:text-base">{btnName}</p>
                <p className="text-xs sm:text-sm">{count}</p>
            </div>
        </button>
    );
};

export default PanelLargeBtn;
