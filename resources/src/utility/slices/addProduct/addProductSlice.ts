import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AddProductApi from "../../api/AddProductApi.ts";
import Swal from "sweetalert2";
import { CommonFunction } from "../../common/CommonFunction.ts";
import { IInitialState, IPayload } from "../../types/addProduct/AddProduct.d.ts";


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
        builder.addCase(AddProductApi.pending, (state: IInitialState): void => {
            state.isLoading = true;
        });
        builder.addCase(AddProductApi.fulfilled, (state: IInitialState, action: PayloadAction<IPayload>): void => {
            const payload: IPayload = action.payload;
            state.isLoading = false;
            if (payload.status === 422) {
                CommonFunction(payload, state);
                return;
            }
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Product Added Successfully",
                showConfirmButton: false,
                timer: 1500,
            });
        });
        builder.addCase(AddProductApi.rejected, (state: IInitialState) => {
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
