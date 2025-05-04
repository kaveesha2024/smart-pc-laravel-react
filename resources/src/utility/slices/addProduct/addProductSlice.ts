import { createSlice } from "@reduxjs/toolkit";
import AddProductApi from "../../api/AddProductApi.ts";
import Swal from "sweetalert2";

interface IInitialState {
    status: number;
    message: string;
    isLoading: boolean;
    errState: {
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
    };
}
const initialState: IInitialState = {
    status: 0,
    isLoading: false,
    message: "",
    errState: {
        product_name: "",
        description: "",
        price: "",
        image: "",
        brand: "",
        quantity: "",
        ram: "",
        processor: "",
        storage: "",
        graphics: "",
        storage_type: "",
        display: "",
        color: "",
        screen_size: "",
        operating_system: "",
        battery: "",
    },
};
const addProductSlice = createSlice({
    name: "addProductSlice",
    initialState,
    reducers: {},
    extraReducers: (builder): void => {
        builder.addCase(AddProductApi.pending, (state): void => {
            state.isLoading = true;
        });
        builder.addCase(AddProductApi.fulfilled, (state, { payload }): void => {
            state.isLoading = false;
            if (payload.status === 422) {
                const {
                    product_name,
                    description,
                    price,
                    ram,
                    processor,
                    storage,
                    graphics,
                    storage_type,
                    display,
                    color,
                    brand,
                    screen_size,
                    operating_system,
                    battery,
                    quantity,
                    image,
                } = payload.errors;
                state.errState.product_name = "";
                state.errState.description = "";
                state.errState.price ="";
                state.errState.image = "";
                state.errState.brand = '';
                state.errState.quantity = "";
                state.errState.ram = "";
                state.errState.processor = "";
                state.errState.storage = "";
                state.errState.graphics = "";
                state.errState.storage_type = "";
                state.errState.display = "";
                state.errState.color = "";
                state.errState.screen_size = "";
                state.errState.operating_system = "";
                state.errState.battery = "";
                state.errState.product_name = product_name[0];
                state.errState.description = description[0];
                state.errState.price = price[0];
                state.errState.image = image[0];
                state.errState.brand = brand[0];
                state.errState.quantity = quantity[0];
                state.errState.ram = ram[0];
                state.errState.processor = processor[0];
                state.errState.storage = storage[0]
                state.errState.graphics = graphics[0];
                state.errState.storage_type = storage_type[0];
                state.errState.display = display[0];
                state.errState.color = color[0];
                state.errState.screen_size = screen_size[0];
                state.errState.operating_system = operating_system[0];
                state.errState.battery = battery[0];
                return;
            }
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
            });
        });
        builder.addCase(AddProductApi.rejected, (state, { payload }) => {
            state.isLoading = false;
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong and product not added!",
            });
        });
    },
});
export default addProductSlice.reducer;
