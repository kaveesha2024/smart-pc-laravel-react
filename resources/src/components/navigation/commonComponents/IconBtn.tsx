import React, { JSX } from "react";

interface IIconBtn {
    onclick: () => void,
    svg: JSX.Element,
}
const IconBtn: React.FC <IIconBtn> = ({ onclick, svg }) => {
    return (
        <button
            onClick={onclick}
            className="text-white font-semibold"
        >
            {svg}
        </button>
    );
};

export default IconBtn;
