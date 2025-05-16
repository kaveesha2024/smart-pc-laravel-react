import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { IInputDetails } from "../types/product/addProduct/AddProduct.d.ts";
import { RootState } from "../../store.ts";
import Swal from "sweetalert2";

let apiToast: any;
const AddProductApi = createAsyncThunk(
    'product/addProduct',
    async ( data: IInputDetails, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;
        const token: string = state.authentication.token;
        try {
            if (!token) {
                toast.error('You need to be logged in to add a product');
                return;
            }
            apiToast = toast.loading('Loading...');
            const response = await axios.post('/api/products/add-product', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.dismiss(apiToast);
            return response.data;
        }catch (err) {
            toast.dismiss(apiToast);
            Swal.fire({
                title: "The Internet?",
                text: "That thing is still around?",
                icon: "question"
            });
        }
    }
);
export default AddProductApi;
