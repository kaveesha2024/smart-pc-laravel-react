import React from "react";

export interface ILaptopForm {
    handleInputDetails: (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => void;
    handleSubmit: () => void;
    inputDetails: IInputDetails;
}
export interface IInputDetails {
    category: string;
    product_name: string;
    description: string;
    price: number;
    image: string;
    brand: string;
    quantity: number;
    long_description: string;
    ram: string;
    processor: string;
    storage: string;
    graphics: string;
    storage_type: string;
    display: string;
    color: string;
    screen_size: string;
    operating_system: string;
    battery: string;
}
export interface err {
    product_name: string;
    description: string;
    price: string;
    image: string;
    brand: string;
    quantity: string;
    ram: string;
    processor: string;
    storage: string;
    graphics: string;
    storage_type: string;
    display: string;
    color: string;
    screen_size: string;
    operating_system: string;
    battery: string;
}

export interface IInitialState {
    status: number;
    message: string;
    isLoading: boolean;
    errState: err;
}
