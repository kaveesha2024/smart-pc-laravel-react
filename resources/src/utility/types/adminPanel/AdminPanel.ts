import React from "react";

export interface IAdminNavBtn {
    onclick: ()=>void;
    btnName: string;
    Icon: React.FC;
}
export interface IPanelLargeBtn {
    btnName: string;
    count: number;
    Icon: React.FC;
}
export interface IUser  {
    first_name: string;
    email: string;
    role: "admin" | "user" | string;
}
export interface IInitialStateDashboard {
    isLoading: boolean,
    status: number,
    totalUsers: number,
    totalProducts: number,
    latestSignupUsers: string[],
}
export interface IAllUsers {
    id: number,
    first_name: string,
    last_name: string,
    role: string,
    email: string,
    created_at: string,
}
