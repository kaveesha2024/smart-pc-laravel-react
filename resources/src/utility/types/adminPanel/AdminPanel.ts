import React from "react";

export interface IAdminNavBtn {
    onclick: ()=>void;
    btnName: string;
    Icon: React.FC;
}
export interface IPanelLargeBtn {
    btnName: string;
    count: string;
    Icon: React.FC;
}
