import React from "react";




export interface IInitialState {
    status: number;
    message: string;
    isLoading: boolean;
    errState: err;
}

export interface IPayload {
    status: number,
    errors: err
}
export interface IAddProductDetails {
    productName: string;
    description: string;
    labelledPrice: number;
    price: number;
    quantity: number;
    cardDescription: string;
    images: FileList | File[] ;
}
export interface IAddProductErrState {
    productName: string;
    description: string;
    labelledPrice: string;
    price: string;
    quantity: string;
    cardDescription: string;
    images: string;
}
